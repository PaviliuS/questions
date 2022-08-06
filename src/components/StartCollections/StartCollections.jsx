import * as Style from './Style';
import Collection from './Collection/Collection';
import SearchForm from './SearchForm/SearchForm';
import { VscSymbolKey, VscSync, VscSearch } from "react-icons/vsc";
import { useContext, useState } from 'react';
import { LangContext } from '../../lang/lang';

const Collections = (props) => {
    let [lang] = useContext(LangContext);
    let [searchForm, setSearchForm] = useState(false);

    const onClickSetSearchForm = () => {
        searchForm === false ? setSearchForm(true) : setSearchForm(false);
    }

    let questionsCount = 0;
    let collections = props.collections.map(collection => {
        questionsCount++;
        return <Collection key={collection.id} index={questionsCount} deleteCollection={props.deleteCollection} collection={collection}></Collection>
    });

    let searchQuestionsCount = 0;
    let searchCollection = props.searchCollection.map(collection => {
        searchQuestionsCount++;
        return <Collection key={collection.id} index={searchQuestionsCount} deleteCollection={props.deleteCollection} collection={collection}></Collection>
    });

    return (
        <Style.Collections>
            <Style.Content>
                <Style.Label >
                    {searchForm ? lang.searchCollections : lang.collections}
                </Style.Label>

                <Style.Options>
                    <Style.SortCollections onClick={() => props.sortCollections()}>
                        <VscSymbolKey />
                    </Style.SortCollections>

                    <Style.ReverseCollections onClick={() => props.reverseCollections()}>
                        <VscSync />
                    </Style.ReverseCollections>

                    <Style.SearchCollections onClick={() => onClickSetSearchForm()}>
                        <VscSearch />
                    </Style.SearchCollections>
                </Style.Options>

                {searchForm ? <SearchForm searchCollections={props.searchCollections}></SearchForm> : ''}                
                <Style.List>{searchForm ? searchCollection : collections}</Style.List>

            </Style.Content>
        </Style.Collections>
    );
}

export default Collections; 