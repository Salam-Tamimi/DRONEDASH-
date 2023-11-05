// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Things You Must Need to See While You’re In Dubai',
        screens: blogImg1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magni harum nihil voluptates, recusandae.',
        author: 'Loura Sweety',
        create_at: '25 Sep 2022',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Mistakes Every Couple Makes When They Travel Together',
        screens: blogImg2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magni harum nihil voluptates, recusandae.',
        author: 'David Luis',
        create_at: '23 Sep 2022',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Remember This 10 Things Before Booking Hotel.',
        screens: blogImg3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magni harum nihil voluptates, recusandae.',
        author: 'Jenefer Willy',
        create_at: '21 Sep 2022',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;