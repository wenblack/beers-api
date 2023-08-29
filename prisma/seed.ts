

const prisma = require('@prisma/client')

async function main() {
    await prisma.categorie.upsert({
        where: { name: 'lager' },
        update: {},
        create: { name: 'lager' }
    }),
    await prisma.categorie.upsert({
            where: { name: 'weiss' },
            update: {},
            create: { name: 'weiss' }
    }),
    await prisma.categorie.upsert({
            where: { name: 'ipa' },
            update: {},
            create: { name: 'ipa' }
    }),
    await prisma.categorie.upsert({
            where: { name: 'witbier' },
            update: {},
            create: { name: 'witbier' }
    }),
    await prisma.beer.create({
        data:{
           name:"heineken",
           description:"World famous beer",
           IBU:19,
           rating:5,
           categorie:{}
        }
    })
    await prisma.beer.create({
        data:{
           name:"stella artois",
           description:"The most famous belgium beer",
           IBU:18,
           rating:5,
           categorie:{}
        }
    })
    main()
        .catch((e) => {
            console.error(e)
            process.exit(1)
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
}

module.exports = main