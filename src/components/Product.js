export default function Product({ product }) {
    const {id , Name, Description, Price, Reviews, Image } = product;
    // console.log(product);
    const url = Image.data.attributes.url;
    return <div className="product-card">
        <h1>{Name}</h1>
        <div className="details-card">
            <img src={url} alt="Product" id="imageCard" />
            <div>
                <p>{Description}</p>
                <h3>Rs.{Price}</h3>
            </div>
        </div>
        <button
        className="snipcart-add-item"
        data-item-id={id}
        data-item-image={url}
        data-item-name={Name}
        data-item-url="/"
        data-item-price={Price}
        >
            Add to cart
        </button>
        <div>
            Reviews
        </div>
        <p>{Reviews}</p>
    </div>
}