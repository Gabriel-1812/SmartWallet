import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany()
    console.log('Conexão OK!',users)
}

main()
    .catch((e) =>{
        console.error('Erro ao conecatr no  banco', e)
    })
    .finally(async ()=> {

        
        await prisma.$disconnect()
    })