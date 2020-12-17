import React from 'react';

import Card from '../components/Card';

import covidapp from '../assets/images/covidapp.jpg';
import youtubeapp from '../assets/images/youtubeapp.jpg';
import moviesearchapp from '../assets/images/moviesearchapp.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Covid-19 Tracker',
                    subTitle: 'track covid-19 data and sort it by country',
                    imgSrc: covidapp,
                    link: 'https://covid-tracker-indol-delta.vercel.app/',
                    link2:'https://github.com/enrriquep3/React-Apps/tree/main/covidtracker',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Youtube-App',
                    subTitle: 'Search and Wacth all your favorite videos on Youtube',
                    imgSrc: youtubeapp,
                    link: 'https://youtubeapp-ten.vercel.app/',
                    link2:'https://github.com/enrriquep3/React-Apps/tree/main/youtubeapp',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Movie Search-App',
                    subTitle: 'Search for movies, ratigns, overviews and how to watch it ',
                    imgSrc: moviesearchapp,
                    link: 'https://moviesearch-gamma.vercel.app/',
                    link2:'https://github.com/enrriquep3/React-Apps/tree/main/movies',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;