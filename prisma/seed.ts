import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        id: 1,
        name: 'Kategoria 1',
        image:
          'https://images.pexels.com/photos/6605302/pexels-photo-6605302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        name: 'Kategoria 2',
        image:
          'https://images.pexels.com/photos/13938459/pexels-photo-13938459.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 3,
        name: 'Kategoria 3',
        image:
          'https://images.pexels.com/photos/5859489/pexels-photo-5859489.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 4,
        name: 'Kategoria 4',
        image:
          'https://images.pexels.com/photos/13147620/pexels-photo-13147620.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 5,
        name: 'Kategoria 5',
        image:
          'https://images.pexels.com/photos/7966000/pexels-photo-7966000.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 6,
        name: 'Kategoria 6',
        image:
          'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 7,
        name: 'Kategoria 7',
        image:
          'https://images.pexels.com/photos/13575099/pexels-photo-13575099.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 8,
        name: 'Kategoria 8',
        image:
          'https://images.pexels.com/photos/15047680/pexels-photo-15047680.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 9,
        name: 'Kategoria 9',
        image:
          'https://images.pexels.com/photos/6580699/pexels-photo-6580699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 10,
        name: 'Kategoria 10',
        image:
          'https://images.pexels.com/photos/15212791/pexels-photo-15212791.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 11,
        name: 'Kategoria 11',
        image:
          'https://images.pexels.com/photos/2718416/pexels-photo-2718416.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 12,
        name: 'Kategoria 12',
        image:
          'https://images.pexels.com/photos/8084774/pexels-photo-8084774.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
    ],
  });

  const districts = await prisma.district.createMany({
    data: [
      { id: 1, name: 'Aniołki' },
      { id: 2, name: 'Brętowo' },
      { id: 3, name: 'Brzeźno' },
      { id: 4, name: 'Chełm' },
      { id: 5, name: 'Jasień' },
      { id: 6, name: 'Kokoszki' },
      { id: 7, name: 'Krakowiec- Górki Zachodnie' },
      { id: 8, name: 'Letnica' },
      { id: 9, name: 'Matarnia' },
      { id: 10, name: 'Młyniska' },
      { id: 11, name: 'Nowy Port' },
      { id: 12, name: 'Oliwa' },
      { id: 13, name: 'Olszynka' },
      { id: 14, name: 'Orunia Górna-Gdańsk Południe' },
      { id: 15, name: 'Orunia-Św. Wojciech-Lipce' },
      { id: 16, name: 'Osowa' },
      { id: 17, name: 'Piecki- Migowo' },
      { id: 18, name: 'Przeróbka' },
      { id: 19, name: 'Przymorze Małe' },
      { id: 20, name: 'Przymorze Wielkie' },
      { id: 21, name: 'Rudniki' },
      { id: 22, name: 'Siedlce' },
      { id: 23, name: 'Stogi' },
      { id: 24, name: 'Strzyża' },
      { id: 25, name: 'Suchanino' },
      { id: 26, name: 'Śródmieście' },
      { id: 27, name: 'Ujeścisko-Łostowice' },
      { id: 28, name: 'VII Dwór' },
      { id: 29, name: 'Wrzeszcz Dolny' },
      { id: 30, name: 'Wrzeszcz Górny' },
      { id: 31, name: 'Wyspa Sobieszewska' },
      { id: 32, name: 'Wzgórze Mickiewicza' },
      { id: 33, name: 'Zaspa Młyniec' },
      { id: 34, name: 'Zaspa Rozstaje' },
      { id: 35, name: 'Żabianka-Wejhera-Jelit.Tysiąc.' },
    ],
  });

  const conditions = await prisma.condition.createMany({
    data: [
      { id: 1, name: 'Używane' },
      { id: 2, name: 'Nowe' },
      { id: 3, name: 'Uszkodzone' },
    ],
  });

  console.log({ categories, districts, conditions });
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
