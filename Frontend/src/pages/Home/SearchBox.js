function SearchBox(props) {
    return (
        <div className="main-head">
            <form
                className="search-box"
                onSubmit={(e) => props.HandleSearch(e)}>
                <input
                    type="search"
                    placeholder="Pesquise seu anime aqui..."
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)} />
                <button
                    type="submit">
                    Pesquisar
                </button>
            </form>
        </div>
    )
}

export default SearchBox
