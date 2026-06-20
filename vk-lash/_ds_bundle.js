/* @ds-bundle: {"format":3,"namespace":"VKLDVitRiaKellyLashDesignSystem_b37c80","components":[{"name":"PriceRow","sourcePath":"components/cards/PriceRow.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"TechniqueCard","sourcePath":"components/cards/TechniqueCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"WhatsAppButton","sourcePath":"components/core/WhatsAppButton.jsx"},{"name":"SectionHeading","sourcePath":"components/sections/SectionHeading.jsx"}],"sourceHashes":{"components/cards/PriceRow.jsx":"5ec742c1c400","components/cards/ServiceCard.jsx":"3045a96a4673","components/cards/TechniqueCard.jsx":"430d891099da","components/core/Badge.jsx":"1a65f68358a6","components/core/Button.jsx":"4b0691f63f35","components/core/Divider.jsx":"cd90c2d7d37e","components/core/Input.jsx":"296d8b4237b1","components/core/WhatsAppButton.jsx":"51ba43120b84","components/sections/SectionHeading.jsx":"1c701a30a2fc","ui_kits/landing/Agendamento.jsx":"a5edebe184a1","ui_kits/landing/App.jsx":"e30e29560f4e","ui_kits/landing/Footer.jsx":"74ef03cb257d","ui_kits/landing/Header.jsx":"c4711cad6838","ui_kits/landing/Hero.jsx":"34a33ece033e","ui_kits/landing/Procedimentos.jsx":"13737baa7f02","ui_kits/landing/Tecnicas.jsx":"186afdbb791d","ui_kits/landing/Valores.jsx":"75542cebe4a5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VKLDVitRiaKellyLashDesignSystem_b37c80 = window.VKLDVitRiaKellyLashDesignSystem_b37c80 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/PriceRow.jsx
try { (() => {
/**
 * VKLD PriceRow — a single line of the price list (Valores page):
 * service name + optional maintenance sub-line on the left, price(s) on the right,
 * joined by a delicate dotted leader.
 */
function PriceRow({
  name,
  sub,
  price,
  subPrice,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderBottom: '1px dotted var(--divider)',
      transform: 'translateY(-3px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      fontWeight: 600,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, price)), (sub || subPrice) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      fontWeight: 300,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      fontStyle: 'italic'
    }
  }, sub), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), subPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 400,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, subPrice)));
}
Object.assign(__ds_scope, { PriceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PriceRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
/**
 * VKLD ServiceCard — a procedure/service with image, name, short note and price.
 * White card, soft shadow, gentle lift on hover; the catalog's core unit.
 */
function ServiceCard({
  image,
  name,
  description,
  price,
  priceNote,
  badge,
  imageHeight = 220,
  imagePosition = 'center',
  onSelect,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("article", {
    onClick: onSelect,
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-soft)',
      cursor: onSelect ? 'pointer' : 'default',
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: imageHeight,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: imagePosition,
      display: 'block'
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.625rem',
      fontWeight: 600,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--rose-600)',
      background: 'rgba(255,255,255,0.92)',
      borderRadius: 'var(--radius-pill)',
      backdropFilter: 'blur(4px)'
    }
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: '0.8125rem',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      flex: 1
    }
  }, description), price && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.75rem',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, price), priceNote && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, priceNote))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TechniqueCard.jsx
try { (() => {
/**
 * VKLD TechniqueCard — horizontal photo + name + description, mirroring the
 * "Técnicas" catalog page (Volume Brasileiro, Egípcio, Fox, Luxo).
 */
function TechniqueCard({
  image,
  name,
  description,
  reverse = false,
  imagePosition = 'center',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      direction: reverse ? 'rtl' : 'ltr',
      alignItems: 'center',
      gap: 22,
      padding: 16,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: 120,
      height: 130,
      objectFit: 'cover',
      objectPosition: imagePosition,
      borderRadius: 'var(--radius-md)',
      display: 'block',
      direction: 'ltr'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr',
      textAlign: reverse ? 'right' : 'left'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: '0.8125rem',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, description)));
}
Object.assign(__ds_scope, { TechniqueCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TechniqueCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VKLD Badge — small tracked label/chip. Tones echo the brand palette.
 */
function Badge({
  children,
  tone = 'rose',
  style = {},
  ...rest
}) {
  const tones = {
    rose: {
      background: 'var(--accent-soft)',
      color: 'var(--rose-600)'
    },
    nude: {
      background: 'var(--nude-300)',
      color: 'var(--text-onnude)'
    },
    gold: {
      background: 'transparent',
      color: 'var(--gold-500)',
      border: '1px solid var(--gold-400)'
    },
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--cream-100)'
    },
    soft: {
      background: 'var(--cream-200)',
      color: 'var(--text-muted)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.625rem',
      fontWeight: 600,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VKLD Button — elegant pill button in the brand's rose / gold / nude treatments.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  icon = null,
  iconRight = null,
  as = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: '0.75rem',
      gap: 7
    },
    md: {
      padding: '13px 28px',
      fontSize: '0.8125rem',
      gap: 9
    },
    lg: {
      padding: '17px 38px',
      fontSize: '0.875rem',
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--ink-900)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-cta)'
    },
    gold: {
      background: 'var(--gold-gradient)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)'
    },
    nude: {
      background: 'var(--nude-400)',
      color: 'var(--text-onnude)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--taupe-500)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes[size].gap,
      padding: sizes[size].padding,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: sizes[size].fontSize,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      width: full ? '100%' : 'auto',
      transition: 'transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), filter var(--dur-fast) var(--ease-soft)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.filter = 'brightness(1.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(-2px) scale(1)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * VKLD Divider — the catalog's signature thin rule with a small center node.
 * Use to separate sections gracefully.
 */
function Divider({
  width = '100%',
  node = true,
  tone = 'nude',
  style = {}
}) {
  const lineColor = tone === 'gold' ? 'var(--gold-400)' : 'var(--border-nude)';
  const dotColor = tone === 'gold' ? 'var(--gold-500)' : 'var(--taupe-500)';
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      width,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: lineColor
    }
  }), node && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      margin: '0 10px',
      borderRadius: '50%',
      background: dotColor,
      flex: 'none'
    }
  }), node && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: lineColor
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VKLD Input — soft cream field with label, used in the booking form.
 * Renders <textarea> when multiline; otherwise <input>.
 */
function Input({
  label,
  hint,
  multiline = false,
  rows = 4,
  style = {},
  id,
  ...rest
}) {
  const fieldId = id || (label ? `vk-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const fieldStyle = {
    width: '100%',
    padding: '13px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    color: 'var(--text-strong)',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--radius-md)',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)',
    resize: multiline ? 'vertical' : undefined,
    fontFamily: 'var(--font-sans)'
  };
  const onFocus = e => {
    e.target.style.borderColor = 'var(--accent)';
    e.target.style.boxShadow = `0 0 0 3px var(--focus-ring)`;
  };
  const onBlur = e => {
    e.target.style.borderColor = 'var(--border-soft)';
    e.target.style.boxShadow = 'none';
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.6875rem',
      fontWeight: 600,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    style: fieldStyle,
    onFocus: onFocus,
    onBlur: onBlur
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    style: fieldStyle,
    onFocus: onFocus,
    onBlur: onBlur
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/WhatsAppButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** WhatsApp icon (official glyph, single path). */
function WhatsAppGlyph({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.078 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"
  }));
}

/**
 * VKLD WhatsApp CTA — the studio's primary booking action.
 * Builds a wa.me link with a prefilled Portuguese message.
 */
function WhatsAppButton({
  phone = '5500000000000',
  message = 'Olá! Gostaria de agendar um horário 💕',
  children = 'Agendar pelo WhatsApp',
  size = 'lg',
  full = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: '0.75rem'
    },
    md: {
      padding: '13px 26px',
      fontSize: '0.8125rem'
    },
    lg: {
      padding: '16px 34px',
      fontSize: '0.875rem'
    }
  };
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: sizes[size].padding,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: sizes[size].fontSize,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: '#fff',
      background: 'var(--whatsapp)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-whatsapp)',
      width: full ? '100%' : 'auto',
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.filter = 'brightness(1.05)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.filter = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement(WhatsAppGlyph, {
    size: size === 'lg' ? 20 : 17
  }), children);
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionHeading.jsx
try { (() => {
/**
 * VKLD SectionHeading — eyebrow + elegant serif title, with the brand's
 * tracked-uppercase kicker and optional decorative divider.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  divider = true,
  tone = 'default',
  style = {}
}) {
  const titleColor = tone === 'inverse' ? 'var(--cream-100)' : 'var(--text-strong)';
  const subColor = tone === 'inverse' ? 'rgba(246,237,228,0.72)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 14,
      maxWidth: align === 'center' ? 640 : 'none',
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.6875rem',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--accent-deep)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2rem, 4vw, 3.25rem)',
      lineHeight: 1.05,
      letterSpacing: '0.02em',
      color: titleColor
    }
  }, title), divider && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      marginTop: 2,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--gold-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      margin: '0 9px',
      borderRadius: '50%',
      background: 'var(--gold-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--gold-400)'
    }
  })), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      maxWidth: 560,
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: '0.9375rem',
      lineHeight: 1.7,
      color: subColor
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Agendamento.jsx
try { (() => {
// VKLD landing — Agendamento: booking form that composes a WhatsApp message
(() => {
  const {
    Input,
    Button,
    SectionHeading
  } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;
  function Agendamento() {
    const [form, setForm] = React.useState({
      nome: '',
      tecnica: 'Volume Brasileiro',
      data: '',
      msg: ''
    });
    const set = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    const send = e => {
      e.preventDefault();
      const text = `Olá, Vitória! 💕 Meu nome é ${form.nome || '...'}.\nGostaria de agendar: ${form.tecnica}.` + (form.data ? `\nPreferência de data: ${form.data}.` : '') + (form.msg ? `\nObservação: ${form.msg}` : '');
      window.open(`https://wa.me/${window.VK_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
    };
    const tecnicas = ['Volume Brasileiro', 'Volume Egípcio', 'Volume Fox', 'Volume Luxo', 'Design de Sobrancelha', 'Limpeza de Pele'];
    return /*#__PURE__*/React.createElement("section", {
      id: "agendamento",
      style: {
        background: 'var(--ink-900)',
        paddingBlock: 96,
        color: 'var(--cream-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-wrap",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: 'var(--ls-wider)',
        textTransform: 'uppercase',
        color: 'var(--gold-300)'
      }
    }, "Agendamento"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '18px 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
        lineHeight: 1.08
      }
    }, "Vamos agendar o", /*#__PURE__*/React.createElement("br", null), "seu ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic',
        color: 'var(--rose-400)'
      }
    }, "hor\xE1rio?")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0',
        maxWidth: 380,
        fontFamily: 'var(--font-sans)',
        fontWeight: 300,
        fontSize: '0.9375rem',
        lineHeight: 1.75,
        color: 'rgba(246,237,228,0.74)'
      }
    }, "Preencha os campos e eu te respondo pelo WhatsApp para confirmar dia e hor\xE1rio. Atendimento com hora marcada, em ambiente acolhedor e higienizado."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 28
      }
    }, [['Seg a Sáb · 9h às 19h', '🕘'], ['@vk_lashdesigner', '◎'], ['Sinais de R$30 para reservar', '✓']].map(([t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontFamily: 'var(--font-sans)',
        fontSize: '0.8125rem',
        color: 'rgba(246,237,228,0.86)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--gold-400)'
      }
    }), t)))), /*#__PURE__*/React.createElement("form", {
      onSubmit: send,
      style: {
        background: 'var(--surface-raised)',
        borderRadius: 'var(--radius-xl)',
        padding: '34px 34px 30px',
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Seu nome",
      placeholder: "Como te chamar?",
      value: form.nome,
      onChange: set('nome')
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Data preferida",
      placeholder: "Ex: 12/06 \xE0 tarde",
      value: form.data,
      onChange: set('data')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Procedimento"), /*#__PURE__*/React.createElement("select", {
      value: form.tecnica,
      onChange: set('tecnica'),
      style: {
        width: '100%',
        padding: '13px 16px',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.875rem',
        color: 'var(--text-strong)',
        background: 'var(--surface-raised)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        appearance: 'none',
        cursor: 'pointer'
      }
    }, tecnicas.map(t => /*#__PURE__*/React.createElement("option", {
      key: t
    }, t))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Observa\xE7\xF5es",
      multiline: true,
      rows: 3,
      placeholder: "Alguma prefer\xEAncia ou d\xFAvida?",
      value: form.msg,
      onChange: set('msg')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "primary",
      size: "lg",
      full: true
    }, "Enviar pelo WhatsApp")))));
  }
  window.Agendamento = Agendamento;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Agendamento.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/App.jsx
try { (() => {
// VKLD landing — page assembly
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Header, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.Procedimentos, null), /*#__PURE__*/React.createElement(window.Tecnicas, null), /*#__PURE__*/React.createElement(window.Valores, null), /*#__PURE__*/React.createElement(window.Agendamento, null)), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
// VKLD landing — footer
(() => {
  const {
    WhatsAppButton
  } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--cream-200)',
        borderTop: '1px solid var(--border-soft)',
        paddingBlock: 56
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-wrap",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 40,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-vkld.jpeg",
      alt: "VKLD",
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.15
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '1.3rem',
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, "Vit\xF3ria Kelly"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.5625rem',
        fontWeight: 600,
        letterSpacing: 'var(--ls-wider)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Lash Designer"))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0',
        maxWidth: 280,
        fontFamily: 'var(--font-sans)',
        fontWeight: 300,
        fontSize: '0.8125rem',
        lineHeight: 1.7,
        color: 'var(--text-body)'
      }
    }, "Extens\xE3o de c\xEDlios, design de sobrancelhas e cuidados faciais de alto padr\xE3o.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: '0 0 14px',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Navega\xE7\xE3o"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, [['Procedimentos', '#procedimentos'], ['Técnicas', '#tecnicas'], ['Valores', '#valores'], ['Agendar', '#agendamento']].map(([t, h]) => /*#__PURE__*/React.createElement("li", {
      key: h
    }, /*#__PURE__*/React.createElement("a", {
      href: h,
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.8125rem',
        color: 'var(--text-body)',
        textDecoration: 'none'
      }
    }, t))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: '0 0 14px',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Contato"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        fontFamily: 'var(--font-sans)',
        fontSize: '0.8125rem',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "@vk_lashdesigner"), /*#__PURE__*/React.createElement("span", null, "Seg a S\xE1b \xB7 9h \xE0s 19h")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(WhatsAppButton, {
      phone: window.VK_PHONE,
      size: "sm"
    }, "WhatsApp")))), /*#__PURE__*/React.createElement("div", {
      className: "vk-wrap",
      style: {
        marginTop: 40,
        paddingTop: 20,
        borderTop: '1px solid var(--border-soft)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6875rem',
        color: 'var(--text-muted)'
      }
    }, "\xA9 2025 Vit\xF3ria Kelly Lash Designer \xB7 Todos os direitos reservados"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6875rem',
        color: 'var(--text-muted)'
      }
    }, "Feito com carinho \uD83D\uDC95")));
  }
  window.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Header.jsx
try { (() => {
// VKLD landing — sticky header with logo wordmark, nav, WhatsApp CTA
(() => {
  const {
    Button,
    WhatsAppButton
  } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;
  const VK_PHONE = '5511999999999';
  window.VK_PHONE = VK_PHONE;
  function Header() {
    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 24);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const links = [['Procedimentos', '#procedimentos'], ['Técnicas', '#tecnicas'], ['Valores', '#valores'], ['Contato', '#agendamento']];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(251,246,240,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
        transition: 'all var(--dur-base) var(--ease-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-wrap",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 76
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-vkld.jpeg",
      alt: "VKLD",
      style: {
        width: 46,
        height: 46,
        borderRadius: '50%',
        objectFit: 'cover',
        boxShadow: 'var(--shadow-xs)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '1.25rem',
        fontWeight: 600,
        color: 'var(--text-strong)',
        letterSpacing: '0.01em'
      }
    }, "Vit\xF3ria Kelly"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.5625rem',
        fontWeight: 600,
        letterSpacing: 'var(--ls-wider)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Lash Designer"))), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 30
      },
      className: "vk-nav"
    }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
      key: href,
      href: href,
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-body)',
        textDecoration: 'none',
        transition: 'color var(--dur-fast) var(--ease-soft)'
      },
      onMouseEnter: e => e.currentTarget.style.color = 'var(--accent-deep)',
      onMouseLeave: e => e.currentTarget.style.color = 'var(--text-body)'
    }, label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(WhatsAppButton, {
      phone: VK_PHONE,
      size: "sm"
    }, "Agendar"))));
  }
  window.Header = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
// VKLD landing — hero: serif headline + portrait with rose-gold ring
(() => {
  const {
    Button,
    WhatsAppButton,
    Badge
  } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;
  function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 40,
        paddingBottom: 90
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(80% 60% at 78% 22%, var(--rose-200) 0%, rgba(255,228,224,0) 55%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "vk-wrap vk-reveal",
      style: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: 'var(--ls-wider)',
        textTransform: 'uppercase',
        color: 'var(--accent-deep)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 1,
        background: 'var(--gold-500)'
      }
    }), "Lash Designer \xB7 @vk_lashdesigner"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '20px 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
        lineHeight: 1.04,
        letterSpacing: '0.01em',
        color: 'var(--text-strong)'
      }
    }, "Realce o seu olhar", /*#__PURE__*/React.createElement("br", null), "com c\xEDlios ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic',
        color: 'var(--accent-deep)'
      }
    }, "sob medida")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '22px 0 0',
        maxWidth: 460,
        fontFamily: 'var(--font-sans)',
        fontWeight: 300,
        fontSize: '1rem',
        lineHeight: 1.75,
        color: 'var(--text-body)'
      }
    }, "Extens\xE3o de c\xEDlios, design de sobrancelhas e cuidados faciais com t\xE9cnica, higiene e um toque de delicadeza. Cada aplica\xE7\xE3o \xE9 pensada para a sua beleza natural."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(WhatsAppButton, {
      phone: window.VK_PHONE,
      size: "lg"
    }), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "#tecnicas",
      variant: "outline",
      size: "lg"
    }, "Ver t\xE9cnicas")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 34,
        marginTop: 40
      }
    }, [['+500', 'clientes atendidas'], ['4', 'técnicas de volume'], ['5,0★', 'avaliação média']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '1.9rem',
        fontWeight: 600,
        color: 'var(--text-strong)',
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6875rem',
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, l))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        justifySelf: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: -14,
        borderRadius: 'var(--radius-xl)',
        background: 'var(--gold-gradient)',
        opacity: 0.5,
        filter: 'blur(2px)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        border: '4px solid var(--cream-50)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/portrait-vitoria.jpeg",
      alt: "Vit\xF3ria Kelly, Lash Designer",
      style: {
        display: 'block',
        width: 'min(440px, 42vw)',
        height: 'min(540px, 52vw)',
        objectFit: 'cover'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 22,
        left: -28,
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-vkld.jpeg",
      alt: "",
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.8125rem',
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, "Vit\xF3ria Kelly"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6875rem',
        color: 'var(--text-muted)'
      }
    }, "C\xEDlios & Sobrancelhas"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 18,
        right: -18
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Atendimento com hora marcada")))));
  }
  window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Procedimentos.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// VKLD landing — Procedimentos: service cards grid
(() => {
  const {
    SectionHeading,
    ServiceCard
  } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;
  function Procedimentos() {
    const services = [{
      image: '../../assets/procedimentos.jpeg',
      pos: 'center 16%',
      name: 'Extensão de Cílios',
      description: 'Aplicação fio a fio com volume e curvatura sob medida — do natural ao dramático.',
      price: 'R$110',
      priceNote: 'a partir de',
      badge: 'Mais procurado'
    }, {
      image: '../../assets/procedimentos.jpeg',
      pos: 'center 52%',
      name: 'Design de Sobrancelha',
      description: 'Mapeamento, limpeza e henna para emoldurar o rosto com simetria.',
      price: 'R$30',
      priceNote: 'a partir de'
    }, {
      image: '../../assets/procedimentos.jpeg',
      pos: 'center 88%',
      name: 'Limpeza de Pele',
      description: 'Higienização profunda e revitalizante para uma pele renovada e macia.',
      price: 'R$79,90',
      priceNote: 'sessão'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "procedimentos",
      style: {
        paddingBlock: 90
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-wrap"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "O que ofere\xE7o",
      title: "Procedimentos",
      subtitle: "C\xEDlios, sobrancelhas e cuidados faciais \u2014 pensados para real\xE7ar a sua beleza natural com t\xE9cnica e delicadeza."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 28,
        marginTop: 56
      }
    }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
      key: s.name
    }, s, {
      imageHeight: 230,
      imagePosition: s.pos
    }))))));
  }
  window.Procedimentos = Procedimentos;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Procedimentos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Tecnicas.jsx
try { (() => {
// VKLD landing — Técnicas: the four volume techniques on a nude band
(() => {
  const {
    SectionHeading,
    TechniqueCard
  } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;
  function Tecnicas() {
    const techniques = [{
      name: 'Volume Brasileiro',
      pos: 'center 6%',
      description: 'Fios tecnológicos em formato de "Y", aplicados um a um, para um efeito de volume denso, volumoso e natural.'
    }, {
      name: 'Volume Egípcio',
      pos: 'center 36%',
      description: 'Fios em formato de "W" (geralmente 3D, 4D e 5D), deixando um volume intenso e marcante.'
    }, {
      name: 'Volume Fox',
      pos: 'center 62%',
      description: 'Mapeamento com curvaturas mais retas (L ou M), criando o desejado olhar "puxadinho".'
    }, {
      name: 'Volume Luxo',
      pos: 'center 92%',
      description: 'Fios tecnológicos (6D e 8D) aplicados sobre cada fio natural, para o máximo preenchimento e um olhar chamativo.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "tecnicas",
      style: {
        background: 'var(--cream-200)',
        paddingBlock: 90
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-wrap"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Volume sob medida",
      title: "T\xE9cnicas",
      subtitle: "Cada t\xE9cnica cria um efeito diferente. Na consulta, definimos juntas qual combina com o seu olhar e o seu estilo."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 22,
        marginTop: 56
      }
    }, techniques.map(t => /*#__PURE__*/React.createElement(TechniqueCard, {
      key: t.name,
      image: "../../assets/tecnicas.jpeg",
      imagePosition: t.pos,
      name: t.name,
      description: t.description
    })))));
  }
  window.Tecnicas = Tecnicas;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Tecnicas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Valores.jsx
try { (() => {
// VKLD landing — Valores: price list (the "Valores" catalog page) + catalog CTA
(() => {
  const {
    SectionHeading,
    PriceRow,
    WhatsAppButton,
    Button,
    Badge
  } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;
  function Valores() {
    return /*#__PURE__*/React.createElement("section", {
      id: "valores",
      style: {
        paddingBlock: 90
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-wrap"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Tabela de pre\xE7os",
      title: "Valores",
      subtitle: "Valores transparentes para voc\xEA se planejar. Manuten\xE7\xE3o recomendada entre 15 a 20 dias."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        marginTop: 56,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        padding: '34px 36px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: '1.6rem',
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, "Extens\xE3o de C\xEDlios"), /*#__PURE__*/React.createElement(Badge, {
      tone: "rose"
    }, "+ manuten\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(PriceRow, {
      name: "Volume Brasileiro",
      price: "R$110",
      sub: "manuten\xE7\xE3o",
      subPrice: "R$90"
    }), /*#__PURE__*/React.createElement(PriceRow, {
      name: "Volume Eg\xEDpcio",
      price: "R$120",
      sub: "manuten\xE7\xE3o",
      subPrice: "R$95"
    }), /*#__PURE__*/React.createElement(PriceRow, {
      name: "Volume Fox",
      price: "R$125",
      sub: "manuten\xE7\xE3o",
      subPrice: "R$100"
    }), /*#__PURE__*/React.createElement(PriceRow, {
      name: "Volume Luxo",
      price: "R$130",
      sub: "manuten\xE7\xE3o",
      subPrice: "R$100"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--divider)',
        margin: '2px 0'
      }
    }), /*#__PURE__*/React.createElement(PriceRow, {
      name: "Remo\xE7\xE3o",
      price: "R$25"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        padding: '34px 36px'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 22px',
        fontFamily: 'var(--font-display)',
        fontSize: '1.6rem',
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, "Sobrancelhas & Pele"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(PriceRow, {
      name: "Sobrancelha Simples",
      price: "R$30"
    }), /*#__PURE__*/React.createElement(PriceRow, {
      name: "Sobrancelha Henna",
      price: "R$50"
    }), /*#__PURE__*/React.createElement(PriceRow, {
      name: "Limpeza de Pele",
      price: "R$79,90"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--ink-900)',
        borderRadius: 'var(--radius-lg)',
        padding: '30px 34px',
        color: 'var(--cream-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--gold-gradient)',
        opacity: 0.16
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.625rem',
        fontWeight: 600,
        letterSpacing: 'var(--ls-wider)',
        textTransform: 'uppercase',
        color: 'var(--gold-300)'
      }
    }, "Cat\xE1logo completo"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        fontWeight: 600,
        margin: '8px 0 16px',
        lineHeight: 1.2
      }
    }, "Leve a tabela com voc\xEA"), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "../../assets/valores.jpeg",
      download: "catalogo-vkld.jpg",
      variant: "gold",
      iconRight: /*#__PURE__*/React.createElement(DownloadIcon, null)
    }, "Baixar cat\xE1logo em PDF"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement(WhatsAppButton, {
      phone: window.VK_PHONE,
      size: "lg"
    }, "Tirar d\xFAvidas no WhatsApp"))));
  }
  function DownloadIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    }));
  }
  window.Valores = Valores;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Valores.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PriceRow = __ds_scope.PriceRow;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TechniqueCard = __ds_scope.TechniqueCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
