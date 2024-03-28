
import '../shopcard/Shop.css'
import shopDisney from '../images/shopDisney.jpeg'
import disneylogo from '../images/disneylogo.png';
import disneystore from '../images/disneystore.png'

const Shop = ()=>{

    return(

        <>
            <div className="bound">
                <h2>Shop</h2>

                <div className="shop-wrapper">
                    <div className="content-title">
                        <img src={shopDisney} width="904px" alt="" />
                    </div>

                    <span className='wrapper-content'>
                        <img src={disneystore} width="30%" alt="" />
                        <p>Shop the stories you love for you and your family</p>
                        <a href="#">SHOP NOW</a>
                    </span>
                    
                </div>
            </div>
        </>
    )
}

export default Shop