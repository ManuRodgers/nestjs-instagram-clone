import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');
  prisma.user.create({
    data: {
      username: 'Timmy',
      email: 'tim@gmail.com',
      firstName: 'Tim',
      lastName: 'Duncan',
      password: 'password',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
