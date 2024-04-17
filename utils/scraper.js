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
        //titulo
        productData['name'] = await page.$eval(".productTitle", name => name.innerHTML)
        //precio
        productData['price'] = await page.$eval("#actualprice", price => price.innerHTML)
        //imagenes
        productData['img'] = await page.$eval("#productmainimageitem", img => img.src)
        //info
        productData['info'] = await page.$eval(".productextrainfo", info=>info.innerText)
        //descripción
        productData['description'] = await page.$eval(".productdetailinfocontainer", description=>description.innerText.slice(0,200) + '...')

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
        //Buscamos todos los titulos de la web https://www.workana.com/
        const tmpTitulos = await page.$$eval(".project-header > h2 > a", res => res.map(a => a.href));

        //Quitamos los duplicados
        /* const urls = await tmpurls.filter((link, index) => { return tmpurls.indexOf(link) === index }) */

        console.log("titulos capurados", tmpTitulos)
        // Me quedo con los 20 primeros productos, porque sino es muy largo
        /* const urls2 = urls.slice(0, 21); */

        // Filtramos los productos
        // Extraemos el dato de cada producto
        // await extractProductData(urls2[productLink],browser)

        /* console.log(`${urls2.length} links encontrados`); */

        // Iteramos el array de urls con un bucle for/in y ejecutamos la promesa extractProductData por cada link en el array. Luego pusheamos el resultado a scraped data
      /*    for(productLink in urls2){
            const product = await extractProductData(urls2[productLink],browser)
            scrapedData.push(product)
        }
        
        console.log(scrapedData, "Lo que devuelve mi función scraper", scrapedData.length) */

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
scrap("https://www.workana.com/jobs").then(data => console.log(data))
