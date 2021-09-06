import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
        background: #888;
    };
    &#about{
        background: #666;
    };
    &#work{
        background: #444;
    };
    &#contact{
        background: #222;
    }
`;

export const Header = styled.h1`
    font-size: clamp(3rem, 8vw, 6rem);
    color: #f1f1f1;
    text-transform: uppercase;
    letter-spacing: clamp(.1rem, 4vw, .3rem);
`;