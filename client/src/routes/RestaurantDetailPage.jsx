import React, {useEffect, useContext} from 'react'
import { useParams,  useNavigate } from "react-router-dom"
import {RestaurantsContext} from "../context/RestaurantsContext"
import RestaurantFinder from "../apis/RestaurantFinder"
import StarRating from "../components/StarRating"
import Reviews from "../components/Reviews"
import AddReview from "../components/AddReview"

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
      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant}/>
            <AddReview/>
          </div>
        </>
      )}
    </div>
  )
}

export default RestaurantDetailPage
