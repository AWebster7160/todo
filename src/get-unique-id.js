export default function getUniqueId() {
    const unique = 'id' + Date.now() + (Math.random() * 100);
    let uniqueId = unique.replace('.', '');
    return uniqueId;
    /* example output <div class="card" id="id17083564929393914003070646341"></div> */
}