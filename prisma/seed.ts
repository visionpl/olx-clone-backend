import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const categories = await prisma.category.createMany({
    data: [
      { id: 1, name: 'Kategoria 1' },
      { id: 2, name: 'Kategoria 2' },
    ],
  });

  console.log({ categories });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
