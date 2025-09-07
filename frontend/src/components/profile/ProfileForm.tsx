import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User, ProfileUpdateRequest } from '@/types/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUpload } from '@/hooks';
import { Loader2, Upload, X } from 'lucide-react';

// Form validation schema
const profileFormSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  displayName: z
    .string()
    .max(50, 'Display name must be less than 50 characters')
    .optional(),
  bio: z
    .string()
    .max(160, 'Bio must be less than 160 characters')
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface ProfileFormProps {
  user: User;
  onSubmit: (data: ProfileUpdateRequest) => Promise<void>;
  isSubmitting: boolean;
}

const ProfileForm = ({ user, onSubmit, isSubmitting }: ProfileFormProps) => {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const { uploadFile, uploadState } = useUpload();
  
  // Form setup with validation
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: user.username,
      displayName: user.displayName || '',
      bio: user.bio || '',
    },
  });
  
  // Get user initials for avatar fallback
  const getInitials = () => {
    const name = user.displayName || user.username || user.email;
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  // Handle avatar file change
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Preview the image
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    setAvatarFile(file);
  };
  
  // Handle removing avatar preview
  const handleRemoveAvatar = () => {
    setAvatarFile(null);
    setAvatarPreview(null);
  };
  
  // Handle form submission
  const handleFormSubmit = async (data: ProfileFormValues) => {
    try {
      let avatarUrl = user.avatar;
      
      // Upload avatar if changed
      if (avatarFile) {
        avatarUrl = await uploadFile(avatarFile) || null;
      }
      
      // Submit updated profile
      await onSubmit({
        ...data,
        avatar: avatarUrl,
      });
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };
  
  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Avatar Upload */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <Avatar className="h-24 w-24 border-2 border-border">
                  {avatarPreview ? (
                    <AvatarImage src={avatarPreview} alt="Avatar Preview" />
                  ) : (
                    <>
                      <AvatarImage src={user.avatar || undefined} alt={user.displayName || user.username} />
                      <AvatarFallback className="text-xl">{getInitials()}</AvatarFallback>
                    </>
                  )}
                </Avatar>
                {avatarPreview && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                    onClick={handleRemoveAvatar}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
              
              <div className="mt-4">
                <Label htmlFor="avatar" className="cursor-pointer">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Upload className="h-4 w-4" />
                    {avatarPreview ? 'Change Photo' : 'Upload Photo'}
                  </div>
                  <Input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </Label>
              </div>
            </div>
            
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username">Username *</Label>
              <Input
                id="username"
                {...form.register('username')}
                placeholder="your_username"
              />
              {form.formState.errors.username && (
                <p className="text-sm text-destructive">{form.formState.errors.username.message}</p>
              )}
            </div>
            
            {/* Display Name */}
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                {...form.register('displayName')}
                placeholder="Your Name"
              />
              {form.formState.errors.displayName && (
                <p className="text-sm text-destructive">{form.formState.errors.displayName.message}</p>
              )}
            </div>
            
            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                {...form.register('bio')}
                placeholder="Tell us about yourself..."
                rows={3}
              />
              {form.formState.errors.bio && (
                <p className="text-sm text-destructive">{form.formState.errors.bio.message}</p>
              )}
            </div>
            
            {/* Email (read-only) */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={user.email}
                disabled
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                Your email cannot be changed. It's used for authentication.
              </p>
            </div>
            
            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting || !!uploadState[avatarFile?.name || '']?.isUploading}
              >
                {isSubmitting || !!uploadState[avatarFile?.name || '']?.isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Profile'
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default ProfileForm;
