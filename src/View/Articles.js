import React from 'react'

import './Style.css'

const Article = () => {
    return ( 
        <>
        <div>
            <div className="articles__article">DYNAMIC ARTICLES - widok i navbar dla zalogowanych userów. Artykuły pobierane dynamicznie z API</div>
        </div> <div>
            <div className="articles__article">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores delectus, omnis, totam laboriosam similique eveniet excepturi eum placeat consequuntur maxime, enim voluptas temporibus quam deserunt accusamus laudantium fugit illum?</div>
        </div> <div>
            <div className="articles__article">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores delectus, omnis, totam laboriosam similique eveniet excepturi eum placeat consequuntur maxime, enim voluptas temporibus quam deserunt accusamus laudantium fugit illum?</div>
        </div> <div>
            <div className="articles__article">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores delectus, omnis, totam laboriosam similique eveniet excepturi eum placeat consequuntur maxime, enim voluptas temporibus quam deserunt accusamus laudantium fugit illum?</div>
        </div>
        </>
     );
}
 
export default Article;