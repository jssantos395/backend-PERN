import React, {useEffect, useContext} from 'react'
import { useParams,  useNavigate } from "react-router-dom"
import {RestaurantsContext} from "../context/RestaurantsContext"
import RestaurantFinder from "../apis/RestaurantFinder"

const RestaurantDetailPage = () => {
    const {id} = useParams()
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await RestaurantFinder.get(`/${id}`)
          setSelectedRestaurant(response.data.data.restaurant)
        } catch (err){}
      }
      fetchData()
    }, [])
  return (
    <div>
      {selectedRestaurant && selectedRestaurant.name}
    </div>
  )
}

export default RestaurantDetailPage
