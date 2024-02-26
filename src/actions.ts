"use server"
export type GreetingData = {
    name: string,
    greeting: string
}

export async function sayHello(name: string): Promise<GreetingData> {
    console.log("doing server response")
    // just do some string manipulation and echo the name.
    return {
        name: name,
        greeting: `Hello ${name}!`
    }
}