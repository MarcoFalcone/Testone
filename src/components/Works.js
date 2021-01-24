import './Works.css';

const Works = (props) => (
    <div class="workscont">
      <div class="work 1">
        <img class="img" src="https://ik.imagekit.io/7ol7k87qcca/Boia/Lo_strumento_della_fama_-_Poster_2020__buona_qualit__RGB__zRMsnXvTb.jpg" />
        <p className="info">
        THE FAME TOOL - Ludovico Nenni is a thirty years old actor who lives in the same theatre where he works. Since he is tired of such an unstable situation, he accepts to do a particular audition in a hidden place with eccentric people. The audition consists of a “fame test” in which the candidate has to project himself on a virtual reality and deal with the stress of being a superstar. The audition will leave Ludovico a particular sign even after several months from his ending, so that he will have to decide which values he needs to quit to become what he wants to be: a real actor or just a superstar?
        </p>
        <p class="title" onClick={props.showTrailer}>WATCH TRAILER</p>
      </div>
      <div class="work 2">
        <img class="img" src="https://ik.imagekit.io/7ol7k87qcca/tr:w-629,h-1009,cm-extract,x-6,y-32/Boia/WhatsApp_Image_2021-01-22_at_19.48.47_Tj6U1CD5Z.jpeg" />
        <p className="info">
        POOR AND INFAMOUS - This is the story about a man who lives like a rebel against the society, bringing on a visionary plan of escape from the city he lives. He constantly has in his head the myth of Jim Morrison, a character he tries to follow his lifestyle, based on a total perdition.
        </p>
        <p class="title" onClick={props.showTrailer}>WATCH TRAILER</p>
      </div>
      <div class="work 3">
        <img class="img" src="https://ik.imagekit.io/7ol7k87qcca/tr:w-532,h-770,cm-extract,x-0,y-30/Boia/WhatsApp_Image_2021-01-15_at_19.10.31_BdsHgPn2m.jpeg" />
        <p className="info">
        SHE DOESN'T KNOW HOT TO LOVE - Diego is an inattentive boy who delivers pizzas for his uncle's pizzeria. The casual-awkward meeting of a prostitute from East Europe makes Diego more and more curious about the girl's character. He will try to meet her again until he decides to help the girl to live a different life.
        </p>
      </div>
      <div class="work 4">
        <img class="img" src="https://ik.imagekit.io/7ol7k87qcca/tr:w-557,h-817,cm-extract,x-706,y-0/Boia/mosaico_4ri4dzq3T.jpg" />
        <p className="info">
        Test1Prod. music videos.
        </p>
        <p class="title" onClick={props.showTrailer}>WATCH</p>
      </div>
      <div class="closeworks" onClick={props.close}></div>
    </div>
)

export default Works;
