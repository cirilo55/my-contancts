export default function formatDanfe(danfeNumber) {
  if (!danfeNumber) {
    return '';
  }
  const cleanedNumber = danfeNumber.replace(/\D/g, ''); 
  const matchedGroups = cleanedNumber.match(/.{1,4}/g);

  if (!matchedGroups) {
    return '';
  }

  return matchedGroups
    .slice(0, 11) 
    .join(' . ');
}