// - cache
// As informações desta aula são sobre o fetch no servidor. Por padrão o next usa o force-cache, que irá criar um cache persistente do fetch. (função padrão caso não seja definida)

// cache: 'force-cache' | 'no-store'
fetch("https://api.origamid.online/acoes/lua", {
  cache: "no-store",
});
