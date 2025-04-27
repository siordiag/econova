import Navbar from '../components/Navbar';

export default function Ecoswap() {
  return (
    <div className="ecoswap-bg">
      <Navbar />
      <div className="ecoswap-1">
        <p>
          Welcome to ECOSWAP, your personal sustainability guide. Every product we use has a story—how it was made, how much water it used, how much carbon it released. Type in what you use daily, and we’ll show you smarter swaps that reduce greenhouse gases, save water, and cut down on plastic waste. Your actions matter. Make each swap count.
        </p>
        <img className="down-arrow" src="/images/down-arrow.svg" alt=""/>
      </div>
    </div>
  );
}
  