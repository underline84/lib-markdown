import fetch from "node-fetch";

function manejaErros(erro){
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    try {
        //promises async e await
        const arrayStatus = await Promise
            .all(arrayURLs.map(async url => {
                const res = await fetch(url);
                return res.status;
            }))
        return arrayStatus;
    } catch (erro) {
        manejaErros(erro);
    }

}

function geraArrayDeURLs(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

export default async function validaURL(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    //spread operador
    const resultado = arrayLinks.map((objeto, indice) => ({
        ...objeto, status: statusLinks[indice]
    }))
    return resultado;
}

