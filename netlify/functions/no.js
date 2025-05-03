exports.handler = async function(event, context) {
  const reasons = [
    "No, because it's not the right time.",
    "No, because you deserve better.",
    "No, because you need to focus on yourself.",
    "No, because the universe says so.",
    "No, because boundaries are important."
  ];
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  return {
    statusCode: 200,
    body: JSON.stringify({ reason })
  };
};