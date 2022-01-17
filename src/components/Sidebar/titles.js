import classes from './titles.module.css'




    const CodeWrapper = ({children, href}) => <code className={classes.help}>
        <a href={href} target={'_blank'} rel='noreferrer'>{children}</a> 
    </code>

    const PropertyWrapper = ({property, itDoes}) => <li>
        <code>{property}</code>{itDoes}
    </li>

    const justifyContent = 'https://developer.mozilla.org/ru/docs/Web/CSS/justify-content'

    const alignItems = 'https://developer.mozilla.org/ru/docs/Web/CSS/align-items'

    const flexDirection = 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction'

    const order = 'https://developer.mozilla.org/ru/docs/Web/CSS/order'

    const alignSelf = 'https://developer.mozilla.org/ru/docs/Web/CSS/align-self'
    
    const flexWrap = 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap'

    const flexFlow = 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-flow'

    const alignContent = 'https://developer.mozilla.org/ru/docs/Web/CSS/align-content'

    const titles = [

    // level 1

        (<>
            <p>Добро пожаловать в Flexbox Froggy. 
                Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям написанием CSS кода! 
                Направь этого лягушонка на лилию справа используя свойство 
            <CodeWrapper href={justifyContent}>justify-content</CodeWrapper>,
                которое выравнивает элементы горизонтально и принимает следующие значения:
            </p>
        <ul>
            <PropertyWrapper property={'flex-start'} itDoes={': Элементы выравниваются по левой стороне контейнера.'}/>
            <PropertyWrapper property={'flex-end'} itDoes={': Элементы выравниваются по правой стороне контейнера.'} />
            <PropertyWrapper property={'center'} itDoes={': Элементы выравниваются по центру контейнера.'} />
            <PropertyWrapper property={'space-between'} itDoes={': Элементы отображаются с одинаковыми отступами между ними.'} />
            <PropertyWrapper property={'space-around'} itDoes={': Элементы отображаются с одинаковыми отступами вокруг них.'}/>
        </ul>
            <p>Например, <code>justify-content: flex-end;</code> сдвинет лягушонка вправо.</p>
        </>),


    // level 2

        (<>
            <p>Используй 
            <CodeWrapper href={justifyContent}>justify-content</CodeWrapper>,
                еще раз, чтоб помочь этим лягушатам попасть на их лилии. 
                Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:
            </p>

            <ul>
                <PropertyWrapper property={'flex-start'} itDoes={': Элементы выравниваются по левой стороне контейнера.'}/>
                <PropertyWrapper property={'flex-end'} itDoes={': Элементы выравниваются по правой стороне контейнера.'}/>
                <PropertyWrapper property={'center'} itDoes={': Элементы выравниваются по центру контейнера.'}/>
                <PropertyWrapper property={'space-between'} itDoes={': Элементы отображаются с одинаковыми отступами между ними.'}/>
                <PropertyWrapper property={'space-around'} itDoes={': Элементы отображаются с одинаковыми отступами вокруг них.'}/>
            </ul>
        </>),



    // level 3

        (<>
            <p>
                Помоги всем трем лягушатам найти их лилии, просто используя 
            <CodeWrapper href={justifyContent}>justify-content.</CodeWrapper>
                В этот раз, у лилий много пространства вокруг.
            </p>
            <p>
                Если ты чувствуешь, что забыл возможные значения свойства, 
                ты можешь навести курсор на название свойства, чтоб посмотреть их. Попробуй навести курсор на 
            <CodeWrapper href={justifyContent}>justify-content</CodeWrapper>
            </p>
        </>),



    // level 4

        (<p>
            Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй
            <CodeWrapper href={justifyContent}>justify-content.</CodeWrapper>
            В этот раз, у лилий одинаковое расстояние между ними.
        </p>),



    // level 5

        (<>
            <p>
                Теперь используй
            <CodeWrapper href={alignItems}>align-items.</CodeWrapper>
                чтоб помочь лягушатам добратся к нижней части пруда. Это CSS свойство выравнивает элементы вертикально и принимает следующие значения:
            </p>
            <ul>

                <PropertyWrapper property={'flex-start'} itDoes={': Элементы выравниваются по верхнему краю контейнера'}/>
                <PropertyWrapper property={'flex-end'} itDoes={': Элементы выравниваются по нижнему краю контейнера.'}/>
                <PropertyWrapper property={'center'} itDoes={': Элементы выравниваются вертикально по центру контейнера.'}/>
                <PropertyWrapper property={'baseline'} itDoes={': Элементы отображаются на базовой линии контейнера.'}/>
                <PropertyWrapper property={'stretch'} itDoes={': Элементы растягиваются, чтоб заполнить контейнер.'}/>
            </ul>
        </>),



    // level 6

        (<p>
            Направь лягушонка в центр пруда, используя 
            <CodeWrapper href={justifyContent}>justify-content.</CodeWrapper> и 
            <CodeWrapper href={alignItems}>align-items.</CodeWrapper> вместе. 
        </p>),



    // level 7

        (<p>
            Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, 
            с достаточно большим пространством вокруг них. Используй комбинацию 
            <CodeWrapper href={justifyContent}>justify-content.</CodeWrapper> и
            <CodeWrapper href={alignItems}>align-items.</CodeWrapper>
        </p>),



    // level 8

        (<>
            <p>
                Лягушатам нужно выстроиться в порядке их лилий, используя
            <CodeWrapper href={flexDirection}>flex-direction.</CodeWrapper>
                Это CSS свойство задает направление, 
                в котором будут расположены элементы в контейнере, и принимает следующие значения:
            </p>

            <ul>
                <PropertyWrapper property={'row'} itDoes={': Элементы размещаются по направлению текста'}/>
                <PropertyWrapper property={'row-reverse'} itDoes={': элементы отображаются в обратном порядке к направлению текста.'}/>
                <PropertyWrapper property={'column'} itDoes={': элементы располагаются сверху вниз.'}/>
                <PropertyWrapper property={'column-reverse'} itDoes={': элементы располагаются снизу вверх.'}/>
            </ul>
        </>),



    // level 9

        (<>
            <p>
                Помоги лягушатам расположиться на своих лилиях используя
            <CodeWrapper href={flexDirection}>flex-direction.</CodeWrapper> 
                Это CSS свойство задает направление, 
                в котором будут расположены элементы в контейнере и принимает следующие значения:
            </p>

            <ul>
                <PropertyWrapper property={'row'} itDoes={': Элементы размещаются по направлению текста'}/>
                <PropertyWrapper property={'row-reverse'} itDoes={': элементы отображаются в обратном порядке к направлению текста.'}/>
                <PropertyWrapper property={'column'} itDoes={': элементы располагаются сверху вниз.'}/>
                <PropertyWrapper property={'column-reverse'} itDoes={': элементы располагаются снизу вверх.'}/>
            </ul>
        </>),


    // 10 level

    (<>
    <p>
        Помоги лягушатам попасть на свои лилии. Хоть и кажется, 
        что они почти на своих местах, все же придется применить и
        <CodeWrapper href={flexDirection}>flex-direction</CodeWrapper> и
        <CodeWrapper href={justifyContent}>justify-content</CodeWrapper>,
        чтоб поместить их на свои лилии.
    </p>

    <p>
        Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, 
        начало (start) и конец (end) тоже меняются местами.
    </p>
    </>),


    // level 11

    (<>
    <p>
        Помоги лягушатам найти их лилии с помощью 
        <CodeWrapper href={flexDirection}>flex-direction</CodeWrapper> и
        <CodeWrapper href={justifyContent}>justify-content</CodeWrapper>.
    </p>

    <p>
        Заметь, когда в качестве направления выбрана колонка, то 
        <CodeWrapper href={justifyContent}>justify-content</CodeWrapper> влияет на вертикальное выравнивание, а 
        <CodeWrapper href={alignItems}>align-items</CodeWrapper> на горизонтальное.
    </p>
    </>),



    // 12 level

    (<p>
        Помоги лягушатам найти их лилии с помощью <CodeWrapper href={flexDirection}>flex-direction</CodeWrapper> и 
        <CodeWrapper href={justifyContent}>justify-content</CodeWrapper>.
    </p>),


    // 13 level

    (<p>
        Помоги лягушатам найти их лилии с помощью <CodeWrapper href={flexDirection}>flex-direction</CodeWrapper>, 
        <CodeWrapper href={justifyContent}>justify-content</CodeWrapper> и 
        <CodeWrapper href={alignItems}>align-items</CodeWrapper>.
    </p>),

    
    // 14 level
    (<>
        <p>
            Иногда изменения порядка отображения элементов в контейнере недостаточно. 
            В таких случаях мы можем применить свойство 
            <CodeWrapper href={order}>order</CodeWrapper> для конкретных элементов. 
            По умолчанию, значение этого свойства у элементов равно 0, 
            но мы можем задать положительное или отрицательное целое число этому свойству.
        </p>

        <p>
            Используй свойство <CodeWrapper href={order}>order</CodeWrapper>, 
            чтоб разместить лягушат на своих лилиях.
        </p>
    </>),

    // 15 level
    (<p>
        Используй свойство <CodeWrapper href={order}>order</CodeWrapper>, 
        чтоб отправить красного лягушонка на его лилию.
    </p>),

    // 16 level

    (<p>
        Еще одно свойство, которое ты можешь применить к определенному элементу это 
        <CodeWrapper href={alignSelf}>align-self</CodeWrapper>. Это свойство принимает те же значения, что и 
        <CodeWrapper href={alignItems}>align-items</CodeWrapper>.
    </p>),


    // 17 level

    (<p>Используй 
        <CodeWrapper href={order}>order</CodeWrapper> и 
        <CodeWrapper href={alignSelf}>align-self</CodeWrapper> 
        вместе, чтоб помочь лягушатам добраться к своим целям.
    </p>),


    // 18 level
    
    (<>
        <p>
            О нет! Лягушат сплющило на одном ряду лилий. Раздвинь их с помощью свойства 
            <CodeWrapper href={flexWrap}>flex-wrap</CodeWrapper>, которое принимает следующие значения:
        </p>

        <ul>
            <PropertyWrapper property={'nowrap'} itDoes={': Размеры элементов устанавливаются автоматически, чтоб они поместились в один ряд.'}/>
            <PropertyWrapper property={'wrap'} itDoes={' : Элементы автоматически переносятся на новую строку.'}/>
            <PropertyWrapper property={'wrap-reverse'} itDoes={' : Элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке.'}/>            
        </ul>
    </>),


    // 19 level

    (<>
    <p>
        Помоги этой армии лягушат выстроиться в три колонки с помощью комбинации 
        <CodeWrapper href={flexDirection}>flex-direction</CodeWrapper> и 
        <CodeWrapper href={flexWrap}>flex-wrap</CodeWrapper>.
    </p>
    </>),

    // 20 level

    (<>
        <p>
            Два свойства 
            <CodeWrapper href={flexDirection}>flex-direction</CodeWrapper> и 
            <CodeWrapper href={flexWrap}>flex-wrap</CodeWrapper> используются так часто вместе, что было создано свойство 
            <CodeWrapper href={flexFlow}>flex-flow</CodeWrapper> 
            для их комбинирования. Это свойство принимает значения двух этих свойств, разделеные пробелом.
        </p>
        <p>
            Например, ты можешь использовать 
            <PropertyWrapper property={'flex-flow: row wrap'} itDoes={', чтоб элементы располагались в ряд и автоматически переносились на новую строку.'} />
        </p>
        <p>
            Попробуй использовать <CodeWrapper href={flexFlow}>flex-flow</CodeWrapper>, чтоб повторить предыдущий уровень.
        </p>
    </>),


    // 21 level

    (<>
        <p>
            Лягушат раскидало по всему пруду, но лилии сгруппированы в верхней части. Ты можешь использовать 
            <CodeWrapper href={alignContent}>align-content</CodeWrapper>
            , чтобы указать, как несколько рядов должны отделяться друг от друга. 
            Данное свойство принимает следующие значения:
        </p>


        <ul>
            <PropertyWrapper property={'flex-start'} itDoes={': Ряды группируются в верхней части контейнера.'} />
            <PropertyWrapper property={'flex-end'} itDoes={': Ряды группируются в нижней части контейнера.'} />
            <PropertyWrapper property={'center'} itDoes={': Ряды группируются вертикально по центру контейнера.'} />
            <PropertyWrapper property={'space-between'} itDoes={': Ряды отображаются с одинаковыми расстояниями между ними.'} />
            <PropertyWrapper property={'space-around'} itDoes={': Ряды отображаются с одинаковыми расстояниями вокруг них.'} />
            <PropertyWrapper property={'stretch'} itDoes={': Ряды растягиваются, чтоб заполнить контейнер равномерно.'} />
        </ul>


        <p>
            Это может запутать, но 
            <CodeWrapper href={alignContent}>align-content</CodeWrapper>
             отвечает за расстояние между рядами, в то время как 
            <CodeWrapper href={alignItems}>align-items</CodeWrapper> 
            отвечает за то, как элементы в целом будут выровнены в контейнере. Когда только один ряд, 
            <CodeWrapper href={alignContent}>align-content</CodeWrapper> ни на что не влияет.
        </p>
    </>),

    // 22 level

    (<>
        <p>
            Теперь течение сгруппировало лилии в нижней части. Используй 
            <CodeWrapper href={alignContent}>align-content</CodeWrapper>, чтоб направить лягушат туда.
        </p>
    </>),


    // 23 level

    (<>
        <p>
            Лягушата были на вечеринке, но уже пора возвращаться домой. Используй комбинацию 
            <CodeWrapper href={flexDirection}>flex-direction</CodeWrapper> и 
            <CodeWrapper href={alignContent}>align-content</CodeWrapper>, чтоб отправить их к своим лилиям.
        </p>
    </>),


    // 24 level

    (<>
        <p>Доставь лягушат по домам в последний раз, используя CSS свойства, которые ты выучил:</p>

        <ul>
            <li><CodeWrapper href={justifyContent}>justify-content</CodeWrapper></li>
            <li><CodeWrapper href={alignItems}>align-items</CodeWrapper></li>
            <li><CodeWrapper href={flexDirection}>flex-direction</CodeWrapper></li>
            <li><CodeWrapper href={order}>order</CodeWrapper></li>
            <li><CodeWrapper href={alignSelf}>align-self</CodeWrapper></li>
            <li><CodeWrapper href={flexWrap}>flex-wrap</CodeWrapper></li>
            <li><CodeWrapper href={flexFlow}>flex-flow</CodeWrapper></li>
            <li><CodeWrapper href={alignContent}>align-content</CodeWrapper></li>
        </ul>
    </>)
    
]


export default titles;
