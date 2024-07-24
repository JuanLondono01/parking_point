import { useEffect, useState } from 'react';
import { parkingAPI } from '../helpers/Axios';
import '../styles/main.css'

interface Vehicle {
    _id: string;
    client_name: string;
    vehicle: string;
    plate: string;
    vehicle_type: string;
    date: Date;
}

export const ParkingPoint = () => {
    const [Vehicles, setVehicles] = useState<Vehicle[]>([])

    const fetchVehicles = async ()=>{
        const resp = (await parkingAPI.get('/')).data
        setVehicles(resp)
    }

    useEffect(() => {
        fetchVehicles()
    }, [])
    

    return (
        <>
            <h1>ParkingPoint</h1>

            {
                Vehicles.map((item)=>{
                    return(
                        <div key={item._id} className='parked_card'>
                                <p>{JSON.stringify(item.date)}</p>
                                <p>{item.client_name}</p>
                                <p>{item.vehicle}</p>
                                <p>{item.plate}</p>
                                <p>{item.vehicle_type}</p>
                                <button>Registrar salida</button>
                        </div>
                    )
                })
            }

        </>
    )
};
