import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red.bold(erro.code, 'não foi encontrado o arquivo'));
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green.bold(texto)))
//     .catch((erro) => trataErro(erro))
// }

//async e await
async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));
    }catch(erro){
        trataErro(erro)
    }
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

pegaArquivo('./arquivos/texto1.md');