import Form from 'next/form'
import Link from 'next/link';

export default function New() {

    return (
        <div>
            <Link href="/" className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                Retour
            </Link>


            <div className="flex items-center justify-center h-screen">
                <Form action="/api/new" className="flex flex-col gap-2 w-96">
                    <label htmlFor="numero" className="block text-gray-700 font-bold mb-2">
                        Numero de salle
                    </label>
                    <input type="text" name="numero" id="numero" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                        Date d'entrée
                    </label>
                    <input type="date" name="date" id="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ajouter</button>
                </Form>
            </div>
        </div>
    )
}