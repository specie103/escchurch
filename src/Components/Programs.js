import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import first_sun from '../images/first_sun.png';
import second_sun from '../images/slidder2.jpg';
import third_sun from '../images/third_sun.png';
import fourthSun from '../images/fourthSun.png';
import fifthSun from '../images/FifthSun.png';
import holyComm from '../images/hcomm.png';
import lastWednesday from '../images/lastWednesday.png';
import goodMJ from '../images/gmj.png';
import secondSat from '../images/secondSat.png'

const Column = ({title, imgSrc, description, moreText}) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="col-md-3 d-flex flex-column justify-content-center">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top"
                    src={imgSrc}
                    alt={title}/>
                <div className="card-body">
                    <h5 className="card-title bluec">
                        {title}</h5>
                    <p className="card-text">
                        {description}</p>
                    <div className={
                        `read-more ${
                            showMore ? "show" : "hide"
                        }`
                    }>
                        <p> {moreText} </p>
                    </div>
                    <Button variant="outline-primary" className='pbutton read-more-button'
                        onClick={toggleShowMore}>
                        {
                        showMore ? "Show Less" : "Read More"
                    } </Button>
                </div>
            </div>
        </div>
    );
};

const Programs = ({limit}) => {
    const columns = [
        {
            title: "First Sunday",
            imgSrc: first_sun,
            description: "Revival & Annoited Service",
            moreText: "Though prepared table before me in the presence of mine enemies, thou anoint my head with oil, my cup runs over. Psalm 23:5"
        },
        {
            title: "Second Sunday",
            imgSrc: second_sun,
            description: "Sermon",
            moreText: "Not that I have already obtained all this, or have already arrived at my goal, but I press on to take hold of that for which Christ Jesus took hold of me. Phil. 3:12"
        },
        {
            title: "Third Sunday",
            imgSrc: third_sun,
            description: "Bible Exposition",
            moreText: "Your word is a lamp for my feet, a light on my path. Psalm 119: 105"
        },
        {
            title: "Fourth Sunday",
            imgSrc: fourthSun,
            description: "Seralph Sunday",
            moreText: "Hearken to the throngs of Seraphim, glory, glory their songs… The Youths and the Teens in the house take over His praises and adoration capping it with words of exhortation."
        }, {
            title: "Fifth Sunday",
            imgSrc: fifthSun,
            description: "Family & Health",
            moreText: "Then I will pour out a spirit of grace and prayer on the family of David and on the people of Jerusalem… Zechariah 12:10"
        }, {
            title: "Last Sunday",
            imgSrc: holyComm,
            description: "Holy Communion",
            moreText: "Spiritually ordained by God, His flesh and blood rejuvenate us to do exploits for His sake and the Gospel’s sake."
        }, {
            title: "Tuesdays 7:30-8:15AM",
            imgSrc: goodMJ,
            description: "Good Morning Jesus",
            moreText: "If I can just touch the hem of His garment"
        }, {
            title: "Last Wednesday of the Month",
            imgSrc: lastWednesday,
            description: "Dominion Service 3-4PM",
            moreText: "Thou made him to have dominion over the works of thy hands… Psalm 8:6"
        }, {
            title: "SECOND SATURDAY OF EVERY QUARTER 10 – 11AM",
            imgSrc: secondSat,
            description: "For the Lord Dwell in Zion",
            moreText: "Sing and rejoice, O daughter of Zion, for behold, I come and I will dwell in your midst, declares the LORD. Zechariah 2:10"
        },


        // Add more objects for additional columns
    ];

    const limitedColumns = columns.slice(0, limit);

    return (
        <div className="container" fluid>
            <div className='hone bluec'>
                <h1>Programs and Services</h1>
            </div>
            <div className="row justify-content-center">
                {
                limitedColumns.map((column, index) => (
                    <Column key={index}
                        title={
                            column.title
                        }
                        imgSrc={
                            column.imgSrc
                        }
                        description={
                            column.description
                        }
                        moreText={
                            column.moreText
                        }/>
                ))
            } </div>
            <div className="centered-container my-5">
                <Link to="/Connect" className="text-decoration-none">
                    <Button variant="primary" className="link-button">
                        More Programs
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Programs;
