import React from 'react'
import styled from 'styled-components'

const ArticlesCtn = styled.div`
    margin-top: 3em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center articles on mobile */
    gap: 2em; /* Add spacing between articles */
    width: 100%;
    text-align: center;
    color: #fff;
`

const ArticleCtn = styled.a`
    width: 100%; /* Full width on mobile */
    max-width: 320px; /* Max width for articles on small screens */
    border: 3px solid white;
    margin-bottom: 2em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 1px 1px 5px 5px rgb(73, 73, 255);
        background: grey;
        color: black;
    }

    &:visited {
        color: #fff;
        text-decoration: none;
    }

    /* Medium screens (tablets) */
    @media (min-width: 768px) {
        width: 48%; /* Two columns on tablets */
    }

    /* Large screens (desktops) */
    @media (min-width: 1024px) {
        width: 23%; /* Four columns on desktop */
    }
`

const Container = styled.div`
    text-align: center;

    h2 {
        font-size: 1.5em; /* Adjust font size for mobile */
        margin: 0;
        padding: 0;
        margin-top: 1.5em;
    }

    /* For larger screens */
    @media (min-width: 768px) {
        h2 {
            font-size: 2em; /* Increase font size on tablets */
        }
    }

    @media (min-width: 1024px) {
        h2 {
            font-size: 2.5em; /* Larger font size on desktop */
        }
    }
`


const IconCtn = styled.div`
    width: 100%;
    font-size: 3em; /* Adjust icon size for mobile */
    
    /* Medium screens (tablets) */
    @media (min-width: 768px) {
        font-size: 4em; /* Larger icons on tablets */
    }

    /* Large screens (desktops) */
    @media (min-width: 1024px) {
        font-size: 5em; /* Even larger icons on desktop */
    }
`

const ArticleTitle = styled.h1`
    font-shadow: 1px 1px rgb(73, 73, 235);
    color: #fff;
    font-size: 2em;
    margin: 0;
    padding: 0;
    margin-top: 1em;

    /* Adjust title size for larger screens */
    @media (min-width: 768px) {
        font-size: 3em;
    }

    @media (min-width: 1024px) {
        font-size: 4em;
    }
`

function Article({title, articles}) {
  return (
    <Container>
        <ArticleTitle>{title}</ArticleTitle>

        <ArticlesCtn>
            {articles.map((article) => (
                    
                    <ArticleCtn key={article.id} href={article.link} target="_blank" rel="noopener noreferrer">
                        <IconCtn>{article.icon}</IconCtn>
                        <div>
                            <h2>{article.name}</h2>
                            <p>{article.description}</p>
                        </div>
                    </ArticleCtn>
                ))
            }
        </ArticlesCtn>

    </Container>
    
  )
}

export default Article