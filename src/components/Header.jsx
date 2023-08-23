import { useEffect } from "react";
import { useTransitionPagesContext, useStateFinshRender } from "../context/TransitionPagesAnimationContext";
import gsap from "gsap";

function Header() {
  

  let animationGsapPage = gsap.context((self)=>{
    self.add("effectHeader",()=>{
      console.log("her")
      gsap.to(".header",{
        opacity:1,
        delay:1
      })
    })
  }) 

  useEffect(()=>{

    
    animationGsapPage.effectHeader()
    return ()=>{
      animationGsapPage.revert()
    }
  },[])

  return ( 
    <div className="header">
      <div className="header-title">
        <h2>ENTHUSIAST</h2>
      </div>
      <div  className="header-menuicon">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAALNJREFUaEPt1rERAjEMBVFTCyT0XwwJ1AId4OCNhjGzl39Z2pXv7rIOfy6H978a4NcGM5ABJNAKIUCOZ4ARYoH/N3C93d8IieKv5+Mr5K2BBiD+a2UAAY7Ht3dgvAM8oAEQIMczwAixwNZAHzIk3Ifs+BXCDRiPby/xeAd4QAMgQI5ngBFiga2B41+jDYAr0q8EAhyPby/xeAd4QAMgQI5ngBFigQwgQI5ngBFigQwgQI5/AIekMDHvN7kbAAAAAElFTkSuQmCC"/>
      </div>
      <div className="header-contact">
        <div className="header-contact-img contact-img-1 ">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA21JREFUWEftll+IVHUUxz/nzjYK1hpmD4GVYSb5NHNn7x02iJ07SX8MQbNVRHsyoQiCBRUq/FORFVqP0YPiQy+ywhKR0Utzp15mZ9yZyVWCyJVVopcV+wPDujJzT1zdpW1nZ+5vbAuD/cGFy/19zzmf3/n97vkd4Q4bcofxsAgUtSOLGfrPM/RtOrE2UOt1oFfgcYXzKMNWl5zoK5TPzwD5mUxXY/L3xzYUqz/Mhmzasq97e1fE61OZ7NnKUNRq5s77rv0WcAi4az5bRXYGohdiiIfqaxpYm7IjIz+2Bcq79oDCUbX0hexw9QtTKN+xdyF8ZqpX1fe7A+vQ1Xj8nmcLhWszdk0Z8t3kIEg/0AA2e6XKl1FB/FRqJTH9Cbg3Sjs974vwqyoP3rhe954ZHa21AbLDrGwKBQqBKB8v6Vpy8IlCYbJVMN+xtyOcMoSZkU0EDel9qlwea7tlOdd+U+C9OaIrgTLw3dnK54chaDo7jn0UYW8HQGNYwQZv+PvxuTZNW5Zzkn0ikp/PuSi/qHAyaMjJ2Svz3dRx0N3GQCL7vGL52Lwx5n48DFafYw8ibI0IMAGE6Q6fR4G0MRCyxyuVjxsBfZNOPW1NNUrErfC398yDmCtVrOezxZGvjICm/7ItwGVgjXkYc6WiiWypes4IKO/aHyrsN3ffsbI28fCa5dtOnw7LStNorkNOIoFYFfh3WhMRhjLFSsvzOe9tn0sn3xGVAx2v3chAX/ZK1ROtpC3bj7xj70E4ptBtFMdM9NuN6/VVsytzZB2aEeR7ks8FMY2jse2C7jCL116lou9mi9WD7VQtM5RL2ylRRhYCZNpHjYas9srlq7cFFBrl3OQngry6IFCiO7xiNfK+a9vCKojv2h8JDPwzKPnUK5WNFmbUU+edhIMlu1QlCTzZIdyZyWt/bN148eKUiZ0R0GB/f+z+K2OvoLwN3Gfi+KZGOcWy7pe8fL5uatMS6GbPW6s9ZNFIiHAEWGfq9FYrxZFMqXJAbr0bj78B5dI9G0WD/QKPBLBKwDL29JfwclgmMqVq4TZsm6+HXE/POrEab4C8CCzrwOkFUR2Kdy39oF13GeWv5ZYNrl8fX3n3Ug+RtKi6IKuF4AFFQshxhEuqOi7IOaR+xiuO/hwVzGTe6FCbOFoozSJQVCYXM/S/y9CfyDUaNN7LkQ8AAAAASUVORK5CYII="/>
        </div>
        <div className="header-contact-img contact-img-2">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAx9JREFUWEfll01IFGEYx//P+NEHagnVoYI+sIhAcmd11lJrRhOiDwiyQxFFl+jSoQ/s0CUvQUUe7NSlQ1GI1UkoSHO3EnNm3Vesk2QSQnQokBQy3d15YkNE32Z2d9SVpfa47zv//+/9P8/7zjuELPtRlvHg3wUKaepFBprnJE7oNExR76UKi5ZQl+a7RKA7kvl3wxJrswkIsThtqo9ERtKFynRCiSa9oVviWtYAAZiMxWl7uillPKHpZD4zoaHWFJFUSS0akOMum+seZ8YDKMpTWlHw0giFYk5wSwk02z8GYtMw+6tlqEUDctn2rhUiYEy3xKr/B8ilh/qIuIVZaQJ4i5TGD8MSq+edUDCgVgLcAKYyAkoZWEfALd0SVxOiTkBEbOlmf6DP788bz+VzYJwBsA1AAmR+QK8qyvbkQLnLBNVhNWkByc91+P2r8om27uvr6/eUUFdA9RMjBKDAqTsZuF1ricbEmEtThw1LaKnOntnjrrssWFm2mWxlgIEiN8GlBdJ8bQAdT7a6JQMKab7dDOpxqO+YzXhGBBOKMhiP08j+cHg4VVMvuGQhzfeIQSel2k4xUZ1hRrqdDDLaQ0FN/QZgjWR83rDEPbfVZgzodXm5z1ZsIRvbOfGNde8Gviw5UFBTDwNol4y/GpZYn6wXujS1kYCbUpl7dEtULaiHQppaw8AbSWQiNz+6oab7w6h7Qv4WAl+YM85oNcLixIKAuquqCqPRiYRxjiTUZFjiupP485KSZSuLi4aZMCdFr9fXhLbjwRjU1BcADkjmURCfNsz+1tn/M0ChCvUJCMf+OiaIanUzElxQQn/OlIB6lhn3nYQI/NgmaoYd/0WUcxSYeWHK0wcNS+zwAuOekK4vx8+xXgC7vArOzGe6YoQj8ndaSrmk7zLYynsAhSlV5AnMHROj40cODg1Nen026RU2sePAaJWbNZkJAW0FcTpVHolEvcK4lmy20Nvq0uLYVN5DAIdSGHwkxmU9LOQzzBNX2pf8zoBvp2IrOim8F8w6QPkAPgHoZUawyKb2+aYiHaaeFpDxyWknlHGSaYOsA/oNhj5MNNx8T5gAAAAASUVORK5CYII="/>
        </div>
        <div className="header-contact-img contact-img-3">      
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA7pJREFUWEftll1oHFUUx39nJrFNTVPQtoIPtVYpWApmZ7KbBkuzk1Ip4gdCEiNCG5NURQUpKHkISEFRERGhD37Rh4KiNhFFjZa2ya4fqWZ2dwL1ob74UdSXVqUakbTZ3SNTs3Gz2c1ON1vtQ+Zp997/Pec3/3PunStcZo9cZjwsAZWryJJDvkOHOjrMNae+uwPNbiZrDDmp1Dc55/5Th45Fbt5oYPYJugvkGh9C4HTU9S78nvlfrqqLm//QtldcaWbbRXgAlVsKown6W9SduPqSA8UjoRbF6AW9B6hf4LU+d1xv2yUBitn2amroRrUHuCmQt8oLTsJ7ompAfoOu/eHb2zDoVuUuwCwCclbRxwTZCAzkz6toe9v4xLuLBjoWDm8wSPcZyG4Vri3phvAGadmLof0IjxfqDDXXtSYSP1YEdLylpW4qM9VhIL0Ks3UvAXNKRO6vT/PFpJl9E6SjiO6M43pr88cDbfuRpqaIKdlehC6FhjK9kRZ48Qpz2b5fz5+XelM/BlqLrRHlg2jC88s8+5QEOtzSctXyzLndCn6Dbg7UoJA0TOlp/TL19Weh0JpMrXEEtLHUWoWBNtd7ZkGgWNjaKQZ7VLkTqAkI8qeqDDiJ1H4BHbHtGwyTo6DXL7Q+C9u3u95oSaBYxPoE2BkQIicbRtIPOeMnfvIHRpstW5TDwOpycWpr6xq2jo1NlgSKR6wDMyUqF8ufP6PKo20J71BOPNJs32qovg/UBQhw0nG9TYW6eT0U29K4nozZJWiHClaRwAq8ls5I/45U6vfcfCxs3YdwsMQ5VCzMQced6C4LlC84atvrTFO7BNqBMHASoccZ977K18UioX6QZ//5VgZ7ROXhaCL18kUBzUm6pXH9ymnz56ZUajo3riDxsLUf4ZFgGP+qjKxhtSaTExUDFS5M2nbtpMkg6JxzJCDY9Keut3wfZKsGFG9u2qGaPRIQYI5M4HjU9eZdRXxR4JoXJh4NW50ivFMJEMpLTsLbW2xtxUCxiPUg8EpFQKL3OuMTb1cZ6MLOei4v6EcIv6DM28qFiQ3SG1rdE99XFWg0Yj0vkLtYDa/MyN3+Dpwp5YFSt0SBP6Kut6qUs4soWeh1kD7gPVY0dDrxeHr2kPQP16wxBNhFEg87rnd79YHC1pCInjt93Y27OgcHM4UJYtFoDX9NPg3anz8nKk9GE6mnqg4UtJlHwqFtJvJW7lapWWNrWzI59r8B+Yn9u9WyzNQekLOO67260MtU3ENBHbpY3RJQOceWHCrn0N8a6So0kJufGQAAAABJRU5ErkJggg=="/>
        </div>
      </div>
    </div>
  );
}

export default Header;