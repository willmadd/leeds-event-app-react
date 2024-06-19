import React, { CSSProperties } from "react";

export default function Home() {
  const styles: Record<string, CSSProperties> = {
    body: {
      fontFamily: "'Roboto', Arial, sans-serif",
      color: "#333",
      margin: 0,
      padding: 0,
      backgroundColor: "#f7f9fc",
    },
    header: {
      backgroundColor: "#3f51b5",
      color: "white",
      padding: "20px 0",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    main: {
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "12px",
    },
    h1: {
      fontSize: "2.5em",
      margin: 0,
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75em",
      color: "#3f51b5",
      margin: "30px 0 10px",
      fontWeight: 700,
    },
    p: {
      fontSize: "1.125em",
      color: "#555",
      marginBottom: "20px",
      lineHeight: 1.8,
    },
    a: {
      color: "#3f51b5",
      textDecoration: "none",
      borderBottom: "2px solid transparent",
      transition: "border-bottom-color 0.3s",
    },
    aHover: {
      borderBottomColor: "#3f51b5",
    },
    iframe: {
      display: "block",
      width: "100%",
      maxWidth: "100%",
      margin: "20px 0",
      border: "none",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
    },
    footer: {
      textAlign: "center",
      padding: "20px 0",
      backgroundColor: "#3f51b5",
      color: "white",
      marginTop: "40px",
    },
    info: {
      backgroundColor: "#ffecb3",
      padding: "15px",
      border: "2px solid #ffb300",
      margin: "20px 0",
      borderRadius: "8px",
      color: "#333",
    },
    downloadButton: {
      backgroundColor: "#3f51b5",
      color: "white",
      padding: "10px 20px",
      borderRadius: "8px",
      margin: "10px 0",
      display: "inline-block",
      textDecoration: "none",
      transition: "background-color 0.3s",
    },
    downloadButtonHover: {
      backgroundColor: "#303f9f",
    },
    ul: {
      listStyle: "none",
      paddingLeft: 0,
    },
    li: {
      marginBottom: "10px",
    },
    liBefore: {
      content: '"•"',
      color: "#3f51b5",
      display: "inline-block",
      width: "1em",
      marginLeft: "-1em",
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Leeds Event App Tutorial</h1>
      </header>
      <main style={styles.main}>
        <h2 style={styles.h2}>1. Setting up your environment for React</h2>
        <p style={styles.p}>
          {`          This video looks at how to install Node on your mac. If you're using a windows PC there are several tutorials online, such as
`}{" "}
          <a
            style={styles.a}
            href="https://www.geeksforgeeks.org/installation-of-node-js-on-windows/"
          >
            this
          </a>
        </p>
        <div style={styles.info}>
          <p style={styles.p}>
            {`            If you get an error "command not found: brew", then in your terminal, paste the following command and press enter:
`}{" "}
          </p>
          <code>export PATH=/opt/homebrew/bin:/opt/homebrew/sbin:$PATH</code>
          <p style={styles.p}>Then restart your terminal</p>
        </div>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5xBNW7bF5T8?si=z9TW9NrMUedgQFv0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>
          2. Different options for getting a react app off the ground
        </h2>
        <p style={styles.p}>
          In this video we look at how to start a react project and the options
          that are available to us
        </p>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LedVvN0blyU?si=WnePDy99mahisl7z"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>3. Getting started with create-react-app</h2>
        <p style={styles.p}>
          In this video we look at how to start a react project using
          create-react-app and get a basic template up and running
        </p>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8stCNhyMRMo?si=PgS-zMmncbDSyCLt"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>
          4. React Syntax, the Differences Between HTML and JSX
        </h2>
        <p style={styles.p}>
          In this video we look at the differences between HTML and JSX and how
          to write JSX
        </p>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ioUwybuZ16A?si=WAjH_gPh113sIKld"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>5. React Hooks UseEffect and useState</h2>
        <p style={styles.p}>
          In this video we look at how to use the useEffect and useState hooks
          in React.
        </p>
        <p style={styles.p}>
          {`          This is a key concept of react so it's worth spending a bit of time to make sure you fully understand react hooks, and in particular useState and useEffect.
`}{" "}
        </p>
        <p style={styles.p}>
          {`          There's a lot of information online about them, so please do a bit of research and reading around them.
`}{" "}
        </p>
        <p style={styles.p}>
          {`          There's a few videos I've found here to give you the basics, but please give enough time to this topic
`}{" "}
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="https://www.youtube.com/watch?v=4pO-HcG2igk&ab_channel=NetNinja"
            >
              useState
            </a>
          </li>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="https://www.youtube.com/watch?v=gv9ugDJ1ynU&ab_channel=NetNinja"
            >
              UseEffect1
            </a>
          </li>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="https://www.youtube.com/watch?v=jQc_bTFZ5_I&ab_channel=NetNinja"
            >
              useEffect2
            </a>
          </li>
        </ul>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ldnwRVpTGks?si=B7gelXu8343tEBTj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>6. JS Data Types</h2>
        <p style={styles.p}>
          {`          This is a brief intro into Javascript data types. It's worth spending a bit of time to make sure you understand the different data types in Javascript, as it's another key concept to understand when working with React.
`}{" "}
        </p>
        <p style={styles.p}>
          Here are some links to videos that explain data types and Arrays and
          Objects, but again, please do some further research around the topics
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="https://www.youtube.com/watch?v=poGEVboh9Rw"
            >
              Data Types
            </a>
          </li>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="https://www.youtube.com/watch?v=txjmvEPlAtU"
            >
              Arrays
            </a>
          </li>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="https://www.youtube.com/watch?v=1c9CArj66mU"
            >
              Objects
            </a>
          </li>
        </ul>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/k_KfVrlJ_5o?si=LyHG7mmdwR8WPA8m"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>7. The Fetch API</h2>
        <p style={styles.p}>
          In this video we look at what an API is, how web applications
          communicate with each other, and how to fetch data.
        </p>
        <p
          style={styles.p}
        >{`Here\'s a list of API endpoints you can play with`}</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Cat Facts API - https://cat-fact.herokuapp.com/facts/random
          </li>
          <li style={styles.li}>
            Random User API - https://randomuser.me/api/
          </li>
          <li style={styles.li}>
            Random Joke API -
            https://official-joke-api.appspot.com/jokes/programming/random
          </li>
          <li style={styles.li}>
            Random Dog API - https://dog.ceo/api/breeds/image/random
          </li>
        </ul>
        <p style={styles.p}>
          Practice calling the above API end points in your fetch function and
          logging the result.
        </p>
        <div style={styles.info}>
          <p style={styles.p}>
            At the end of this video, I have left the console log in the
            useEffect, this will cause your app to not display anything. In
            order to fix this please change the console.log(data) in the
            useEffect to be setData(data)
          </p>
          <code>
            <pre>
              {`useEffect(() => {
    fetch("/full-data.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);`}
            </pre>
            <p style={styles.p}>To</p>
            <pre>
              {`useEffect(() => {
    fetch("/full-data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);`}
            </pre>
          </code>
        </div>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WR55jRV3z-Y?si=jiIsowL5nQH3EDfd"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>8. Mapping over an Array of strings</h2>
        <p style={styles.p}>
          In this video we look at how to map over an array of strings and
          display them in a list
        </p>
        <p style={styles.p}>
          Here are the links to the dummy data downloads mentioned in the video
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a
              style={{ ...styles.a, ...styles.downloadButton }}
              href="/event-names.json"
              download
            >
              Download Event Names JSON
            </a>
          </li>
          <li style={styles.li}>
            <a
              style={{ ...styles.a, ...styles.downloadButton }}
              href="/simple-data.json"
              download
            >
              Download Simple Data JSON
            </a>
          </li>
          <li style={styles.li}>
            <a
              style={{ ...styles.a, ...styles.downloadButton }}
              href="/full-data.json"
              download
            >
              Download Full Event Data JSON
            </a>
          </li>
        </ul>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5LgcSwN33Yg?si=WeZfB4cQTieAwrb4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>9. Mapping over an Array of Objects</h2>
        <p style={styles.p}>
          Here we build on our previous knowledge of mapping over an array of
          strings and look at how to map over an array of objects an access
          nested properties.
        </p>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BRxTSXRb3U4?si=YD4c93yNoeoRqEON"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>10. Mapping over advanced data structures</h2>
        <p style={styles.p}>
          In this video we look at how to map over more advanced data structures
          such as arrays of objects with nested arrays and objects.
        </p>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5RIfnuCFQjs?si=IF4lPL-DQleISaFf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 style={styles.h2}>11. Adding styles to your app using CSS</h2>
        <p style={styles.p}>
          In this video we look at how to add styles to your app using CSS. We
          look at how to add a CSS file to your project and how to link it to
          your components.
        </p>
        <p style={styles.p}>
          {`We've only covered very basic css properties in this video, however there's literally thousands of properties out there.`}
        </p>
        <p style={styles.p}>
          {`There's no shortcut to learning CSS properties, other than practice. We'd recommend visualising how you want your page to look and then trying to recreate it`}
        </p>
        <p style={styles.p}>
          Some key layout css concepts are flex box and grid, below are two
          resources to help you understand them
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a style={styles.a} href="https://flexboxfroggy.com/">
              Flexbox Froggy
            </a>
          </li>
          <li style={styles.li}>
            <a style={styles.a} href="https://cssgridgarden.com/">
              Grid Garden
            </a>
          </li>
          <li style={styles.li}>
            <a style={styles.a} href="https://flukeout.github.io/">
              CSS position challenge
            </a>
          </li>
        </ul>
        <iframe
          style={styles.iframe}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HDeLZ-sQ5_g?si=layfyerdkNezX-zG"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Leeds Event App Tutorial</p>
      </footer>
    </div>
  );
}
