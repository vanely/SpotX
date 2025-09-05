import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create default categories
  const categories = [
    {
      name: 'Skateboarding',
      slug: 'skateboarding',
      description: 'Skateboarding spots including parks, street spots, and bowls',
      icon: '🛹',
      color: '#EF4444',
      isOfficial: true,
    },
    {
      name: 'Rollerblading',
      slug: 'rollerblading',
      description: 'Inline skating and rollerblading locations',
      icon: '⛸️',
      color: '#3B82F6',
      isOfficial: true,
    },
    {
      name: 'Parkour',
      slug: 'parkour',
      description: 'Parkour and freerunning training spots',
      icon: '🤸',
      color: '#10B981',
      isOfficial: true,
    },
    {
      name: 'BMX',
      slug: 'bmx',
      description: 'BMX biking spots and bike parks',
      icon: '🚴',
      color: '#F59E0B',
      isOfficial: true,
    },
    {
      name: 'Scooter',
      slug: 'scooter',
      description: 'Scooter riding locations and parks',
      icon: '🛴',
      color: '#8B5CF6',
      isOfficial: true,
    },
  ];

  console.log('📂 Creating categories...');
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  // Create default tags
  const tags = [
    // Surface tags
    { name: 'Smooth', slug: 'smooth', category: 'surface', description: 'Smooth riding surface', color: '#10B981' },
    { name: 'Rough', slug: 'rough', category: 'surface', description: 'Rough or textured surface', color: '#F59E0B' },
    { name: 'Concrete', slug: 'concrete', category: 'surface', description: 'Concrete surface', color: '#6B7280' },
    { name: 'Asphalt', slug: 'asphalt', category: 'surface', description: 'Asphalt surface', color: '#374151' },
    { name: 'Wood', slug: 'wood', category: 'surface', description: 'Wooden surface', color: '#92400E' },
    
    // Difficulty tags
    { name: 'Beginner', slug: 'beginner', category: 'difficulty', description: 'Suitable for beginners', color: '#10B981' },
    { name: 'Intermediate', slug: 'intermediate', category: 'difficulty', description: 'Intermediate skill level', color: '#F59E0B' },
    { name: 'Advanced', slug: 'advanced', category: 'difficulty', description: 'Advanced skill level', color: '#EF4444' },
    
    // Feature tags
    { name: 'Rails', slug: 'rails', category: 'features', description: 'Has rails for grinding', color: '#6B7280' },
    { name: 'Stairs', slug: 'stairs', category: 'features', description: 'Has stairs', color: '#6B7280' },
    { name: 'Bowl', slug: 'bowl', category: 'features', description: 'Bowl or pool feature', color: '#3B82F6' },
    { name: 'Vert Ramp', slug: 'vert-ramp', category: 'features', description: 'Vertical ramp', color: '#8B5CF6' },
    { name: 'Street Course', slug: 'street-course', category: 'features', description: 'Street-style course', color: '#6B7280' },
    
    // Condition tags
    { name: 'Well Maintained', slug: 'well-maintained', category: 'conditions', description: 'Well maintained spot', color: '#10B981' },
    { name: 'Needs Repair', slug: 'needs-repair', category: 'conditions', description: 'Needs maintenance', color: '#F59E0B' },
    { name: 'Crowded', slug: 'crowded', category: 'conditions', description: 'Usually crowded', color: '#EF4444' },
    { name: 'Quiet', slug: 'quiet', category: 'conditions', description: 'Usually quiet', color: '#10B981' },
    
    // Accessibility tags
    { name: 'Free', slug: 'free', category: 'accessibility', description: 'Free to use', color: '#10B981' },
    { name: 'Paid', slug: 'paid', category: 'accessibility', description: 'Requires payment', color: '#F59E0B' },
    { name: 'Public', slug: 'public', category: 'accessibility', description: 'Public access', color: '#3B82F6' },
    { name: 'Private', slug: 'private', category: 'accessibility', description: 'Private property', color: '#EF4444' },
    { name: 'Lighting', slug: 'lighting', category: 'accessibility', description: 'Has lighting for night use', color: '#F59E0B' },
  ];

  console.log('🏷️ Creating tags...');
  for (const tag of tags) {
    await prisma.tag.upsert({
      where: { slug: tag.slug },
      update: {},
      create: tag,
    });
  }

  console.log('✅ Database seed completed successfully!');
  console.log(`📂 Created ${categories.length} categories`);
  console.log(`🏷️ Created ${tags.length} tags`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
