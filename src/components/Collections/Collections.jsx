import * as Style from './Style';
import Collection from './Collection/Collection';
import SearchForm from './SearchForm/SearchForm';
import CollectionForm from './CollectionsForm/CollectionForm';
import { VscAdd, VscSymbolKey, VscSync, VscClose, VscSearch} from "react-icons/vsc";
import { useContext, useState } from 'react';
import { LangContext } from '../../lang/lang';


const Collections = (props) => {
    let [lang] = useContext(LangContext);
    let [addForm, setAddForm] = useState(false);
    let [searchForm, setSearchForm] = useState(false);

    const onClickSetAddForm = () => {
        addForm === false ? setAddForm(true) : setAddForm(false);
        setSearchForm(false);
    }
    const onClickSetSearchForm = () => {
        searchForm === false ? setSearchForm(true) : setSearchForm(false);
        setAddForm(false);
    }

    let collectionsCount = 0;
    let collections = props.collections.map(collection => {
        collectionsCount++;
        return <Collection key={collection.id} index={collectionsCount} deleteCollection={props.deleteCollection} collection={collection}></Collection>
    });

    let searchCollectionsCount = 0;
    let searchCollections = props.searchCollection.map(collection => {
        searchCollectionsCount++;
        return <Collection key={collection.id} index={searchCollectionsCount} deleteCollection={props.deleteCollection} collection={collection}></Collection>
    });
 
    return (
        <Style.Collections>
            <Style.Content>
                <Style.Label >
                    {addForm || searchForm ? '' : lang.collection}
                    {searchForm ? lang.searchCollections : ''}
                    {addForm ? lang.addCollections : ''}
                </Style.Label>

                <Style.Options>
                    <Style.AddCollections onClick={()=>onClickSetAddForm()}>
                        {addForm === false ? <VscAdd /> : <VscClose />}
                    </Style.AddCollections>

                    <Style.SortCollections onClick={()=>props.sortCollections()}>
                        <VscSymbolKey />
                    </Style.SortCollections>

                    <Style.ReverseCollections onClick={()=>props.reverseCollections()}>
                        <VscSync />
                    </Style.ReverseCollections>

                    <Style.SearchCollections onClick={()=>onClickSetSearchForm()}>
                        <VscSearch/>
                    </Style.SearchCollections>
                </Style.Options>
                      
                {addForm ? <CollectionForm questionsCollections={props.questionsCollections} questions={props.questions} addForCollection={props.addForCollection} deleteForCollection={props.deleteForCollection} addCollection={props.addCollection} searchQuestions={props.searchQuestions} searchQuestion={props.searchQuestion}></CollectionForm> : ''}           
                {searchForm ? <SearchForm searchCollections = {props.searchCollections}></SearchForm> : ''}
                
                <Style.List>
                    {searchForm ? searchCollections : ''} 
                    {addForm || searchForm ? '' : collections}     
                </Style.List>
            </Style.Content>
        </Style.Collections>
    );
}

export default Collections; 