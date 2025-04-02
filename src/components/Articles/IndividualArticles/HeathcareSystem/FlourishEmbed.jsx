function FlourishEmbed({ src, creditUrl, title, baseStyle, customHeight }) {
  // Override the height if customHeight is provided
  const style = {
    ...baseStyle,
    ...(customHeight ? { height: customHeight } : {}),
  };

  const flourishLogoStyle = {
    width: "105px",
    height: "16px",
    border: "none",
    margin: "0",
    objectFit: "contain",
  };

  return (
    <div className="flourish">
      <iframe
        src={src}
        title={title}
        style={style}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
      <div
        style={{
          width: style.width,
          marginTop: "4px",
          textAlign: "right",
        }}
      >
        <a
          className="flourish-credit"
          href={creditUrl}
          target="_top"
          style={{ textDecoration: "none" }}
        >
          <img
            alt="Made with Flourish"
            src="https://public.flourish.studio/resources/made_with_flourish.svg"
            style={flourishLogoStyle}
          />
        </a>
      </div>
    </div>
  );
}

export default FlourishEmbed;
