const Card = ({ card, onRemove }) => {



    return (
        <div className="flex items-center justify-between bg-gray-50 my-3 rounded-2xl px-5 py-4">


            <div className="flex items-center gap-7">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                    {card.icon}
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-sm">{card.name}</p>
                    <p className="text-gray-700 font-bold text-base">${card.price}</p>
                </div>
            </div>


            <button
                onClick={() => {
                    onRemove(card)

                }}
                className="text-pink-500 text-sm font-semibold hover:text-pink-700 cursor-pointer"
            >
                Remove
            </button>

        </div>
    );
};

export default Card;