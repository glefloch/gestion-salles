"use client"

import { useEffect, useState } from "react"
import Card from '@/components/card/card';
import Link from 'next/link';
import { DocumentSnapshot, collection, getDocs } from "firebase/firestore"
import { db } from '@/lib/firebase'
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

interface Salle {
  id: string
  name: string
  startDate: string
}

export default function Home() {

  const  [salles, setSalles] = useState<Array<Salle>>([]);
  useEffect(() => {
      const fetchItems = async () => {
        const items = await getDocs(collection(db, "gestion-salles"));
        console.log(items.docs[0].data());
        setSalles(items.docs.map(doc => ({...doc.data(), id: doc.id})));
      } 

      fetchItems();
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="self-end justify-self-end">
        <Link href="/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ajouter
        </Link>

      </div>
      <main>
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-center">
          { salles &&
            salles.map(salle => ( 
                <Card key={salle.id} 
                  salle={salle.name}
                    id={salle.id}
                    date={salle.startDate} />)
                    )
          }
        </div>
      </main>
    </div>
  );
}
