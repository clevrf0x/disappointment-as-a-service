import Link from 'next/link';
import './styles.scss';

export default function Home() {
  return (
    <main className='main'>
      <div className='hero-section'>
        <h1>
          <span>Welcome to</span> <br /> Disappointment As A Service
        </h1>
        <h3>Expectations? We&rsquo;ll crush them.</h3>
        <p>
          Are you tired of life&rsquo;s constant letdowns? Look no further! Disappointment As A Service is here to turn your high hopes into soul-crushing
          disappointment. We specialize in delivering premium letdowns, dashed dreams, and shattered expectations, right to your doorstep.
        </p>
        <div class="ghost_btn">Click Me</div>
      </div>
      <div className="footer">
        <p>Copyright © 2023 | Made with Disappointment</p>
      </div>
    </main>
  );
}
