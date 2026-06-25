// ============================================================
// Aura Garden — LINE相談セクション
// 配置場所: src/components/LineConsultSection.tsx
// ============================================================

// ★ ここだけ変更してください
const LINE_URL = "https://lin.ee/XHDFrA8";

export default function LineConsultSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`line-consult-section${compact ? " line-consult-section--compact" : ""}`}
      aria-label="Serenaに無料相談する"
    >
      <style>{`
        .line-consult-section {
          position: relative;
          overflow: hidden;
          padding: 56px 20px 48px;
          background: linear-gradient(160deg, #f5f0ff 0%, #eef5ff 50%, #f0f8f5 100%);
          text-align: center;
        }
        .line-consult-section--compact {
          padding: 36px 20px 32px;
        }

        /* 背景の月の光エフェクト */
        .line-consult-section::before {
          content: "";
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 320px;
          height: 320px;
          background: radial-gradient(ellipse at center, rgba(200,185,255,0.35) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .line-consult-inner {
          position: relative;
          z-index: 1;
          max-width: 480px;
          margin: 0 auto;
        }

        /* 月アイコン */
        .line-consult-moon {
          font-size: 2rem;
          display: block;
          margin-bottom: 4px;
          line-height: 1;
          filter: drop-shadow(0 0 8px rgba(180,160,255,0.6));
        }

        /* 見出し */
        .line-consult-heading {
          font-size: 1.25rem;
          font-weight: 700;
          color: #5b4a8a;
          letter-spacing: 0.03em;
          margin: 0 0 14px;
          line-height: 1.5;
        }

        /* 本文 */
        .line-consult-body {
          font-size: 0.9rem;
          color: #6b5f7a;
          line-height: 1.85;
          margin: 0 0 28px;
        }
        .line-consult-body strong {
          color: #7c5cbf;
          font-weight: 600;
        }

        /* LINEボタン */
        .line-consult-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          max-width: 320px;
          margin: 0 auto 20px;
          padding: 17px 24px;
          background: linear-gradient(135deg, #7c5cbf 0%, #9b7ee8 100%);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(124,92,191,0.35), 0 0 0 0 rgba(155,126,232,0.4);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          -webkit-tap-highlight-color: transparent;
          /* スマホで押しやすい最低高さ */
          min-height: 56px;
        }
        .line-consult-btn:hover,
        .line-consult-btn:focus-visible {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(124,92,191,0.45), 0 0 0 3px rgba(155,126,232,0.3);
        }
        .line-consult-btn:active {
          transform: translateY(0);
        }

        /* LINEアイコン SVG */
        .line-icon {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
        }

        /* 区切り線 */
        .line-consult-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px auto;
          max-width: 280px;
          color: #c4b8d8;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
        }
        .line-consult-divider::before,
        .line-consult-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c4b8d8, transparent);
        }

        /* 注意文 */
        .line-consult-notice {
          font-size: 0.7rem;
          color: #a08db8;
          line-height: 1.6;
          margin: 0;
          padding: 0 4px;
        }

        /* コンパクト版は区切り線なし */
        .line-consult-section--compact .line-consult-divider,
        .line-consult-section--compact .line-consult-body {
          display: none;
        }
        .line-consult-section--compact .line-consult-heading {
          font-size: 1.05rem;
          margin-bottom: 16px;
        }
      `}</style>

      <div className="line-consult-inner">
        <span className="line-consult-moon" aria-hidden="true">🌙</span>

        <h2 className="line-consult-heading">Serenaに無料相談する</h2>

        {!compact && (
          <p className="line-consult-body">
            誰にも言えない気持ちを、少しだけ話してみませんか。<br />
            <strong>Serena</strong>があなたの心にそっと寄り添います。<br />
            相談はLINEから<strong>無料</strong>で送れます。
          </p>
        )}

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="line-consult-btn"
          aria-label="LINEでSerenaに無料相談する（新しいタブで開きます）"
        >
          {/* LINE公式ロゴ風SVG */}
          <svg className="line-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          LINEで相談する（無料）
        </a>

        <p className="line-consult-notice">
          ※医療・法律・緊急相談には対応していません。<br />
          深刻な不調や緊急時は専門機関へご相談ください。
        </p>
      </div>
    </section>
  );
}
