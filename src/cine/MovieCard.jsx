import {getImgUrl} from "../utils/cine-utillty.js";
import Tag from "../assets/tag.svg";
import Rating from "./Rating.jsx";
import {useContext, useState} from "react";
import MovieDetailsModal from "./MovieDetailsModal.jsx";
import {MovieContext} from "../context/index.js";
import {toast} from "react-toastify";

export default function MovieCart({movie}) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const {state, dispatch} = useContext(MovieContext)

    function handleAddToCart(event, movie) {
        event.stopPropagation();
        const found = state.cartData.find((item) => {
            return item.id === movie.id;
        })
        if (!found) {
            dispatch({
                type:"ADD_TO_CART",
                payload:{
                    ...movie
                }
            })
            toast.success(`Movie ${movie.title} added successfully`,{
                position:'bottom-right'
            });
            // setCartData([...state.cartData, movie])
        } else {
            toast.error(`The Movie${movie.title} has been added to the cart already`,{
                position:'bottom-right'
            });
        }

    }

    function handleModalClose() {
        setSelectedMovie(null);
        setShowModal(false);
    }

    function handleMovieSelection(movie) {
        setSelectedMovie(movie)
        setShowModal(true)
    }


    return (
        <>
            {showModal && <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} onCartAdd={(e)=>handleAddToCart(e,movie)}/>}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img
                        className="w-full object-cover"
                        src={getImgUrl(movie.cover)}
                        alt={movie.title}
                    />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating}></Rating>
                        </div>
                        <button className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                           onClick={(e) => handleAddToCart(e, movie)}
                           href="#">
                            <img src={Tag} alt=""/>
                            <span>{movie.price} | Add to Cart</span>
                        </button>
                    </figcaption>
                </a>
            </figure>
        </>

    );
}