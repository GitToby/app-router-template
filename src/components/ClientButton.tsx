"use client"

import {FormEvent, useState} from "react";
import {GreetingData, sayHello} from "@/actions";

export default function GreetingButton() {
    // the data we expect back from the server action
    const [data, setData] = useState<GreetingData | undefined>(undefined)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // extract form data
        const formData = new FormData(event.currentTarget);
        const name = (formData.get("name") as string)

        // send data to the server action, implied POST with array body
        console.log("sending data", name)
        const res = await sayHello(name)
        console.log("got data", res)

        // set the response to see it
        setData(res)
    }

    return <div>
        {/*Basic form to pull in data for submission*/}
        <form onSubmit={onSubmit}>
            <input
                type="string"
                name="name"
                placeholder="Name"
                required
            />
            <button
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                type="submit"
            >Get Greeting!
            </button>
        </form>

        {/*Display the jsonfield data*/}
        <pre>{data ? JSON.stringify(data, null, 2) : "No Data"}</pre>
    </div>
}