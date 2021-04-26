function saludar():string {
    console.log("Hola")
    return "10"
}

const saludo = (nombre: string, edad: number):string => {
    console.log("Este es otro Saludo")
    const mensaje = `Hola! ${nombre}, veo que tienes ${edad} años `
    return mensaje.toUpperCase()
}   

saludar()

saludo("Camilo", 19)