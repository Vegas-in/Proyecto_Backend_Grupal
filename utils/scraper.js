const puppeteer = require("puppeteer");

// Creamos una función para extraer la información de cada producto
const extractProductData = async (url, browser) => {

    try {
        // Creamos un objeto vacío donde almacenaremos la información de cada producto
        const productData = {}
        // Abrimos una nueva pestaña
        const page = await browser.newPage()
        // Accedemos al link de cada producto que nos llega por parámetros
        await page.goto(url)

        // Utilizamos el método newPage.$eval(selector, function) y almacenamos en productData:
        
        /********** A RELLENAR todos los page.$eval(selector, function)  *********/
        productData['tituloOferta'] = await page.$eval(".name", name => name.innerText)
        productData['fechaOferta'] = await page.$eval("#freelancer-details > div.p-box.p-identity > div:nth-child(2) > dl > dd:nth-child(10)", fechaOferta => fechaOferta.innerHTML)
        productData['salarioOferta'] = await page.$eval(".serviceListing__rates", salarioOferta => salarioOferta.innerText)
        if(await page.$("#profileApp div main section div article div div div p")) {
            productData['descripcionOferta'] = await page.$eval("#profileApp div main section div article div div div p", descripcionOferta=>descripcionOferta.innerText)
        }
        else{
            productData['descripcionOferta'] = await page.$eval("#profileApp div main section div article div div div", descripcionOferta=>descripcionOferta.innerText)
        }
        productData['paisOferta'] = await page.$eval("#freelancer-details > div.p-box.p-identity > div:nth-child(1) > div.profile-avatar > div.profile-avatar__info > p.profile-avatar__info__location > span:nth-child(2)", paisOferta=>paisOferta.innerText)
        productData['linkOferta'] = url;
        return productData // Devuelve los datos de un producto
    }
    catch (err) {
        // Devolvemos el error 
        return { error: err }
    }
}


const scrap = async (url) => {
    try {
        // Creamos un array vacío scrapedData donde almacenaremos la información obtenida del scraping
        const scrapedData = []
        // inicializamos una instancia del navegador (browser) con puppeteer.launch() y añadimos en el objeto de configuración la opción headless
        console.log("Opening the browser......");
        const browser = await puppeteer.launch({ headless: false })

        // Abrimos una nueva pestaña en el navegador creando una instancia con el método newPage() a la que llamaremos page
        const page = await browser.newPage();
        // Indicamos la url que debe cargarse en la pestaña con page.goto(url)
        await page.goto(url);
        console.log(`Navigating to ${url}...`);

        // Extraemos todos los links a los que luego navegaremos para obtener el detalle de cada producto

        // Utilizamos el método $$eval(selector, callback) para capturar una colección de nodos y aplicar la lógica que necesitemos
        // En este caso , en el CB filtramos el array de items, guardando en un nuevo array

        /********** A RELLENAR page.$eval(selector, function)  *********/

        //Buscamos todos los titulos de la web https://www.guru.com/d/freelancers/. Esto es como hacer el querySelectorAll
        const tmpGuru = await page.$$eval(".findGuruRecord__topService > div > div > h2 > a", res => res.map(a => a.href));

        // Iteramos el array de urls con un bucle for/in y ejecutamos la promesa extractProductData por cada link en el array. Luego pusheamos el resultado a scraped data
          for(productLink in tmpGuru){
            const product = await extractProductData(tmpGuru[productLink],browser)
            scrapedData.push(product)
        }
        
        console.log(scrapedData, "Lo que devuelve mi función scraper", scrapedData.length)

        // cerramos el browser con el método browser.close
        await browser.close()
        // Devolvemos el array con los productos
        return scrapedData;

    } catch (err) {
        console.log("Error:", err);
    }
}

exports.scrap = scrap;

/********** DESCOMENTAR PARA PROBAR *********/
//scrap("https://www.guru.com/d/freelancers/").then(data => console.log(data))