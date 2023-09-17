import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler() {
        //logic
        if(likedCourses.includes(course.id)){
            //phele sai liked hua hai
            setLikedCourses(  (prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Liked Removed");
        }
        else {
            //phle se liked nhi hai ye course
            //insert krna h ye course liked course me
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else {
                //non empty phele se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className='w-[300px] bg-bgDark opacity-80 rounded-ms overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt='imgs' />
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-15px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>) 
                    }
                </button>
            </div>
            </div>


            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ? (course.description.substr(0,100))+"..." : (course.description)
                    }
                </p>
            </div>

        </div>

    )
}

export default Card
