

const StarRating = ({ rating }) => {

    const normalizedRating = Math.min(5, Math.max(0, rating));

    const stars = Array.from({ length: 5 }).map((_, index) => (
        <span
            key={index}
            className={`text-2xl ${index < normalizedRating ? 'text-yellow-500' : 'text-gray-400'}`}
        >
            ★
        </span>
    ));

    return <div className="flex gap-1">{stars}</div>;
};

export default StarRating;
