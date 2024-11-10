import { useGlobalContext } from "../management/context";
import { FaClock } from "react-icons/fa6";
import HeroPage from "../components/HeroPage";
import image1 from "../assets/images/product_1.jpg";
import image2 from "../assets/images/product_2.jpg";
import image3 from "../assets/images/product_3.jpg";

const OrderHistory = () => {

  const { formatNumber } = useGlobalContext();

  return (
    <>
      <HeroPage title="Order History" />
      <div className="section-container order">
        <div className="content-container">
          <div style={{ overflowX: "scroll "}}>

            <table className="order-table">
              <thead>
                <tr>
                  <th colSpan={5}>
                    <div className="order-title">
                        <FaClock />
                        Sept 28, 2018
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="product-photo" style={{ backgroundImage: `url(${image1})`}}></div>
                  </td>
                  <td style={{ minWidth: '300px' }}>
                    <h3 className="product-name">Black Coffee</h3>
                    <p className="product-detail">Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.</p>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                  <td>
                    <div className="product-amount">
                      <div className="input-amount">1</div>
                    </div>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-photo" style={{ backgroundImage: `url(${image2})`}}></div>
                  </td>
                  <td>
                    <h3 className="product-name">Latte</h3>
                    <p className="product-detail">Som den mest populära kaffedrycken där ute består latte av en skvätt espresso och ångad mjölk med bara en gnutta skum. Den kan beställas utan smak eller med smak av allt från vanilj till pumpa kryddor.</p>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                  <td>
                    <div className="product-amount">
                      <div className="input-amount">1</div>
                    </div>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-photo" style={{ backgroundImage: `url(${image3})`}}></div>
                  </td>
                  <td>
                    <h3 className="product-name">Caramel Latte</h3>
                    <p className="product-detail">Om du gillar latte med en speciell smak kan karamell latte vara det bästa alternativet för att ge dig en upplevelse av den naturliga sötman och krämigheten hos ångad mjölk och karamell.</p>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                  <td>
                    <div className="product-amount">
                      <div className="input-amount">1</div>
                    </div>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5} style={{ borderBottom: 0 }}>
                    <div className="product-total">
                      <span>TOTAL :</span> { formatNumber(3000) } ฿
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>

            <table className="order-table">
              <thead>
                <tr>
                  <th colSpan={5}>
                    <div className="order-title">
                        <FaClock />
                        Sept 28, 2018
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="product-photo" style={{ backgroundImage: `url(${image1})`}}></div>
                  </td>
                  <td style={{ minWidth: '300px' }}>
                    <h3 className="product-name">Black Coffee</h3>
                    <p className="product-detail">Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.</p>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                  <td>
                    <div className="product-amount">
                      <div className="input-amount">1</div>
                    </div>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-photo" style={{ backgroundImage: `url(${image2})`}}></div>
                  </td>
                  <td>
                    <h3 className="product-name">Latte</h3>
                    <p className="product-detail">Som den mest populära kaffedrycken där ute består latte av en skvätt espresso och ångad mjölk med bara en gnutta skum. Den kan beställas utan smak eller med smak av allt från vanilj till pumpa kryddor.</p>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                  <td>
                    <div className="product-amount">
                      <div className="input-amount">1</div>
                    </div>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-photo" style={{ backgroundImage: `url(${image3})`}}></div>
                  </td>
                  <td>
                    <h3 className="product-name">Caramel Latte</h3>
                    <p className="product-detail">Om du gillar latte med en speciell smak kan karamell latte vara det bästa alternativet för att ge dig en upplevelse av den naturliga sötman och krämigheten hos ångad mjölk och karamell.</p>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                  <td>
                    <div className="product-amount">
                      <div className="input-amount">1</div>
                    </div>
                  </td>
                  <td className="text-center" style={{ minWidth: '150px' }}>
                    <p className="product-price">{ formatNumber(1000) } ฿</p>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5} style={{ borderBottom: 0 }}>
                    <div className="product-total">
                      <span>TOTAL :</span> { formatNumber(3000) } ฿
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>

            {/* <table className="order-table">
              <tbody>
                <tr>
                  <td>
                    <p className="no-cart-item">No product order history.</p>
                  </td>
                </tr>
              </tbody>
            </table> */}

          </div>
        </div>
      </div>
    </>
  )

}

export default OrderHistory;