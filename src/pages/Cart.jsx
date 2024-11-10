import { Link } from "react-router-dom";
import { useGlobalContext } from "../management/context";
import { FaWindowClose, FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import HeroPage from "../components/HeroPage";
import image1 from "../assets/images/product_1.jpg";
import image2 from "../assets/images/product_2.jpg";
import image3 from "../assets/images/product_3.jpg";

const Cart = () => {

  const { formatNumber } = useGlobalContext();

  return (
    <>
      <HeroPage title="Shopping Cart" />
      <div className="section-container cart">
        <div className="content-container">
          <div style={{ overflowX: "scroll "}}>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th style={{ minWidth: '300px' }}>Product</th>
                  <th style={{ minWidth: '150px' }}>Price</th>
                  <th>Quantity</th>
                  <th style={{ minWidth: '150px' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaWindowClose />
                  </td>
                  <td>
                    <div className="product-photo" style={{ backgroundImage: `url(${image1})`}}></div>
                  </td>
                  <td>
                    <h3 className="product-name">Black Coffee</h3>
                    <p className="product-detail">Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.</p>
                  </td>
                  <td>
                    <p className="text-center product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                  <td>
                    <div className="product-amount">
                      <FaMinusSquare />
                      <div className="input-amount">1</div>
                      <FaPlusSquare />
                    </div>
                  </td>
                  <td>
                    <p className="text-center product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaWindowClose />
                  </td>
                  <td>
                    <div className="product-photo" style={{ backgroundImage: `url(${image2})`}}></div>
                  </td>
                  <td>
                    <h3 className="product-name">Latte</h3>
                    <p className="product-detail">Som den mest populära kaffedrycken där ute består latte av en skvätt espresso och ångad mjölk med bara en gnutta skum. Den kan beställas utan smak eller med smak av allt från vanilj till pumpa kryddor.</p>
                  </td>
                  <td>
                    <p className="text-center product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                  <td>
                    <div className="product-amount">
                      <FaMinusSquare />
                      <div className="input-amount">1</div>
                      <FaPlusSquare />
                    </div>
                  </td>
                  <td>
                    <p className="text-center product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaWindowClose />
                  </td>
                  <td>
                    <div className="product-photo" style={{ backgroundImage: `url(${image3})`}}></div>
                  </td>
                  <td>
                    <h3 className="product-name">Caramel Latte</h3>
                    <p className="product-detail">Om du gillar latte med en speciell smak kan karamell latte vara det bästa alternativet för att ge dig en upplevelse av den naturliga sötman och krämigheten hos ångad mjölk och karamell.</p>
                  </td>
                  <td>
                    <p className="text-center product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                  <td>
                    <div className="product-amount">
                      <FaMinusSquare />
                      <div className="input-amount">1</div>
                      <FaPlusSquare />
                    </div>
                  </td>
                  <td>
                    <p className="text-center product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                </tr>
                {/* <tr>
                  <td colSpan={6}>
                    <p className="no-cart-item">No product item in shopping cart.</p>
                  </td>
                </tr> */}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={6} style={{ borderBottom: 0 }}>
                    <div className="product-total">
                      <span>TOTAL :</span> { formatNumber(3000) } ฿
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="cart-button">
            <button type="button" className="btn-cart btn-primary">Save Order</button>
            <Link to='/order-history' className="btn-cart btn-third">Order History</Link>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default Cart;