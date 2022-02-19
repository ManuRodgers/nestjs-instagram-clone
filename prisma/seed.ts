import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const Tim = await prisma.user.create({
    data: {
      username: 'Timmy',
      email: 'tim@gmail.com',
      firstName: 'Tim',
      lastName: 'Duncan',
      password: 'password',
    },
  });
  console.log('🚀 ~ file: seed.ts ~ line 16 ~ main ~ Tim', Tim);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
