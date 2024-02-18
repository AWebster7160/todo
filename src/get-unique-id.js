export default function getUniqueId() {
    const unique = 'id' + Date.now() + (Math.random() * 10);
    return unique;
}