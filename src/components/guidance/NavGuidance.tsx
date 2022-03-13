import { useState } from "react";
import NavGuideService from "@/services/client/NavGuideService";
import Traveler from "@/types/interfaces/Traveler";
import Location from "@/types/interfaces/Location";
import TARGET_OPTIONS from "@/constants/targetOptions";
import Unity3DMap, { UnityMessager } from "./map/Unity3DMap";
import ChatBotGuide from "./chat/ChatBotGuide";

function NavGuidance(): JSX.Element {
  const DEFAULT_QUESTION = "";
  const DEFAULT_TARGET = TARGET_OPTIONS[0];
  const DEFAULT_ANSWER = "";
  const [question, setQuestion] = useState<string>(DEFAULT_QUESTION);
  const [target, setTarget] = useState<string>(DEFAULT_TARGET);
  const [answer, setAnswer] = useState<string>(DEFAULT_ANSWER);

  const handleSubmitNavGuideReq = async (event: any): Promise<void> => {
    try {
      event.preventDefault();
      const location: Location = await UnityMessager.requestTravelerLocation();
      const traveler: Traveler = { question, target, location };
      const answer: string = await NavGuideService.answer(traveler);
      console.log(answer);
      setAnswer(answer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, est
      similique debitis voluptatum aspernatur cupiditate iusto repudiandae
      sequi, porro dolorem explicabo qui. Nostrum blanditiis iure fugit, alias
      fuga deserunt temporibus. Autem saepe odio labore quos amet eaque
      deleniti, minima perferendis aliquid eos sapiente debitis qui beatae error
      dolores laboriosam porro eligendi exercitationem nemo, a sequi velit
      totam! Necessitatibus omnis reprehenderit non, neque totam hic! Laborum
      modi voluptate natus vel ducimus, at ex perferendis distinctio dolore iure
      saepe omnis aliquid et maiores est quibusdam mollitia reprehenderit
      placeat sunt. Dolorum accusamus beatae sed facere officia, facilis itaque
      nemo amet voluptates perspiciatis eum deserunt libero accusantium quam
      aliquam unde aspernatur, numquam repudiandae dicta porro? Corrupti, porro,
      nihil error neque totam voluptatem alias non iste ab, qui iusto distinctio
      magni deserunt ad tempore atque ullam pariatur. Quae earum dolorum nobis
      similique? Quia, ducimus necessitatibus aperiam, dicta, eos repellat
      ratione ad commodi tempore ut temporibus ea eum vero voluptates totam ab?
      Reiciendis odit eum at ipsum obcaecati aperiam neque qui laborum. Possimus
      quisquam atque minima eius sint! Modi totam expedita recusandae quidem hic
      et tempore laboriosam exercitationem vel quaerat distinctio libero,
      asperiores, atque cupiditate. Perspiciatis minus magni architecto maiores
      aliquid dolorem recusandae debitis exercitationem culpa?
      <Unity3DMap />
      <ChatBotGuide
        question={question}
        setQuestion={setQuestion}
        targetOptions={TARGET_OPTIONS}
        target={target}
        setTarget={setTarget}
        answer={answer}
        handleSubmitNavGuideReq={handleSubmitNavGuideReq}
      />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, beatae
      consequuntur inventore ducimus earum in. Mollitia nam alias quisquam
      labore aut tempora, sed ea, quam tempore porro suscipit officiis?
      Architecto sit labore porro, eligendi, rem possimus tempora quibusdam
      perspiciatis esse deserunt unde recusandae laudantium deleniti ducimus
      voluptatum odit magnam? Eligendi consectetur quidem excepturi asperiores
      provident tempore labore saepe, voluptatibus, incidunt iusto sequi
      reiciendis, exercitationem ipsa porro praesentium cum quae vitae
      recusandae ad illo fugiat similique doloribus dolor! Dolorem perferendis,
      modi neque rem consectetur obcaecati rerum, animi similique facere vitae
      nam id aut. Quibusdam hic incidunt eaque! Praesentium necessitatibus
      ipsum, magni, esse officiis laborum cumque, voluptate consequatur velit
      eius ex dolore. Maxime fugit quod suscipit sit similique culpa alias quas
      in aperiam vero neque aut doloribus praesentium rerum assumenda, quos
      soluta voluptate consectetur eius repudiandae libero excepturi numquam
      animi aliquid? Saepe rerum est tempore voluptas reiciendis minima, facere
      quis pariatur alias, eligendi dolor voluptatibus officiis quidem dicta.
      Ipsa maxime odit sunt nemo veniam quo sequi dolorum nisi repellendus
      commodi accusantium quasi, itaque quis ut reprehenderit expedita aut
      dolores corrupti deserunt. Doloribus illo possimus sint consectetur
      deleniti cum aspernatur, voluptatem, iusto eum nulla dolor distinctio
      dolorum laudantium tenetur. Nesciunt rem illum ipsa, deleniti ipsum
      numquam praesentium, illo laudantium possimus corrupti repellat
      repellendus! Delectus, nemo inventore numquam sint facilis soluta
      temporibus ratione nostrum, iste, consectetur id ea. Sint nihil enim
      temporibus pariatur dolorum eius expedita. Sapiente amet quam nisi
      deleniti magnam, incidunt quaerat voluptas. Eligendi dolore, veritatis rem
      hic ut facilis. Tempore expedita sit vero porro veritatis autem cum,
      temporibus facere doloribus voluptatum aut provident reprehenderit
      laboriosam quam in libero dolore cupiditate, possimus unde adipisci?
      Maxime repellendus accusantium dolorem delectus, voluptate, officia ullam
      amet iure mollitia id voluptas dolorum minus adipisci quo modi cum
      nesciunt molestiae dolores fugit, vero sunt quasi autem. Eum dignissimos
      facilis corrupti voluptatum aliquid saepe tenetur rem harum consequuntur
      eligendi accusamus nobis dolorem officia commodi earum, itaque,
      consectetur et asperiores necessitatibus praesentium velit sunt! Placeat
      quas, voluptates minima nemo, mollitia distinctio blanditiis quibusdam
      aliquid, quia tenetur hic in. Distinctio ipsum placeat suscipit inventore
      atque, molestiae sunt aut veniam illum et error perspiciatis deserunt illo
      amet accusamus, laborum ad consequuntur maiores est quas incidunt saepe
      explicabo officia! Nobis sint ullam facere quas at, commodi eos?
      Voluptatem nobis doloribus molestias culpa voluptate, ex minus natus
      eveniet aliquid eum omnis! Explicabo sunt nesciunt quia adipisci ex saepe.
      Eos maiores et totam recusandae iste quasi delectus est dolorem omnis,
      laborum sunt accusantium dicta amet rerum repellendus temporibus aliquid
      rem iusto culpa sit ducimus nemo modi? Expedita laudantium placeat illo
      nemo quam esse incidunt quo est reiciendis corporis aspernatur
      exercitationem, inventore voluptas aperiam quisquam quasi natus pariatur
      dolorem rerum enim illum aliquam accusantium mollitia. Neque aliquam
      expedita odit aperiam eos necessitatibus quam sequi reprehenderit repellat
      molestias corrupti nisi non labore blanditiis, sapiente possimus delectus
      dolorem nihil laboriosam corporis beatae eum excepturi. Laborum non eos
      consectetur vero commodi sint harum possimus saepe nemo, numquam
      consequatur debitis accusantium optio recusandae sunt beatae vitae
      asperiores nobis officia nostrum magnam architecto. Veritatis ipsam itaque
      sapiente esse recusandae reprehenderit officia ullam pariatur, culpa
      doloremque vitae quis dolore minus, possimus, vel aliquid numquam
      distinctio. Quia tenetur accusantium voluptates maxime iure quas totam aut
      ducimus earum veritatis excepturi animi optio, voluptas quos dolore
      officiis at! Sed quos adipisci placeat eius illum, voluptatibus,
      provident, fugit facere delectus laudantium exercitationem aliquid ab
      labore nisi totam obcaecati nemo. Fugit neque dicta commodi similique quod
      incidunt? Voluptatem repellendus similique voluptatum consequatur nobis
      possimus cum, eaque quam ipsum autem dolor placeat ad incidunt odio
      eligendi expedita velit illum nihil voluptate modi saepe rem culpa? Quia
      at reiciendis ratione atque debitis, sequi fugit autem tempore, eligendi
      vel consequuntur! Accusantium voluptates, deleniti distinctio
      exercitationem eos asperiores consequuntur explicabo voluptatem dolorum
      vero nostrum quaerat accusamus animi nulla velit neque odit sed? Molestias
      repudiandae, odio natus quaerat minus soluta. Adipisci quaerat magnam
      enim, porro nam repellat rem esse, quas aliquid debitis vero eligendi
      magni. Consectetur dolores mollitia quisquam molestias necessitatibus
      suscipit? Error soluta unde rerum, optio eaque quas recusandae, voluptates
      molestiae fugit numquam esse doloremque labore voluptatibus, qui et nulla
      saepe neque consectetur deleniti nemo consequatur? Tempore ex, magni
      commodi et, reiciendis itaque aliquam atque rem voluptates dicta, porro
      laudantium dolore sunt! Architecto sint quos incidunt doloremque! Deleniti
      odio nam, ea architecto tenetur veniam animi at. Dignissimos, itaque
      explicabo sunt at quam illum iste, cumque deserunt nobis perspiciatis sint
      accusantium repellat? Voluptas deserunt doloremque velit. Aliquam, tempore
      eum ullam, incidunt dolorum ipsa doloribus quo quas fuga quae autem hic
      praesentium omnis voluptatibus? Illo adipisci, obcaecati autem, doloribus
      aliquam maiores magni, quo eligendi in suscipit repellendus voluptatum nam
      voluptas porro facilis ea corrupti neque. Esse, in non vitae ut dolorum
      recusandae aut quis! Officiis nulla ipsam modi aperiam ut voluptate itaque
      amet, recusandae repellendus distinctio dolor illo officia voluptas et
      necessitatibus cupiditate praesentium quos animi incidunt numquam quod ab
      ratione voluptates. Suscipit inventore delectus dolore repellendus
      veritatis nihil totam, a odit tempora! Hic accusantium atque dignissimos
      nihil, voluptatem reiciendis dolores rem esse quae rerum sapiente!
      Accusantium corrupti quisquam quasi obcaecati, veniam ipsam eaque! Ea
      possimus explicabo adipisci cupiditate qui similique? Obcaecati dolorum
      non, reiciendis veritatis repudiandae possimus quidem nisi accusantium
      enim, minus provident quis rerum eveniet, quod ratione magni aut impedit!
      Consectetur suscipit et, voluptates sapiente quam eveniet? Exercitationem
      veritatis quod molestiae quo nulla facilis ab quia obcaecati iusto vitae!
      Deleniti quisquam eos amet, officiis, consequuntur ab, porro fugit
      corrupti sit sapiente maiores dolorum dicta aliquid omnis recusandae et
      distinctio magnam officia laborum expedita rem architecto a.
      Exercitationem eligendi modi nam a sunt deleniti nisi debitis harum autem
      quam quo eum, dolorum magni temporibus enim aliquam ipsum totam nobis
      consectetur maiores animi ratione voluptate. Quibusdam, maiores? Quia
      recusandae totam deleniti sed dolores ipsam id mollitia quisquam iure
      tempore eligendi error, exercitationem commodi odit ea quidem accusantium
      nemo voluptate natus? Exercitationem fugit, laborum odio consectetur sint
      laudantium. Obcaecati optio unde nulla nobis architecto, officia placeat
      consectetur doloribus quod sit quo assumenda? Impedit, a itaque veritatis
      aspernatur beatae nemo autem quam aut architecto accusamus eveniet iure,
      ducimus odit odio corrupti est deleniti ea, consequatur magni saepe.
      Fugiat repellendus placeat optio qui ullam nulla necessitatibus, eos
      recusandae id sint quis quidem harum doloremque quos eaque, quia ab,
      maxime blanditiis eum numquam laboriosam illum? Soluta ex quod expedita
      tempora ullam quasi repudiandae eligendi dignissimos dolore sit sapiente
      vitae, harum amet hic libero vel accusamus blanditiis iste, in optio odio
      et. Nihil, odio delectus quisquam, aut deleniti sint illo sequi natus,
      eius consequuntur nesciunt! Aut consequatur, dolores laborum magni
      voluptatum assumenda in quas tempora corporis corrupti delectus quis
      vitae, odit velit maxime exercitationem fugit expedita pariatur fugiat
      vel? Enim odit consectetur eaque tempora numquam accusamus? Est tempore
      illo vitae quos sint, dolore totam quam dignissimos. Beatae culpa nulla ab
      quae sint accusantium excepturi doloremque expedita, nam repellendus
      impedit ut provident? Eos doloribus dolores provident maiores perferendis
      corporis voluptate ex quos. At iure ratione culpa necessitatibus, commodi
      doloremque, autem tenetur praesentium aliquam quaerat iste vel repellendus
      reiciendis ipsum numquam voluptate quibusdam. Quo quos ut quam, delectus
      quasi sapiente inventore vel alias cumque numquam modi praesentium?
      Consectetur facere, explicabo aliquid non inventore rerum repudiandae.
      Nulla nihil sequi, error tempora beatae explicabo totam, fugit dolor
      libero voluptas eum ullam rerum vel reiciendis iusto eligendi quidem
      commodi obcaecati quas iste provident. Odit quas quibusdam recusandae quia
      officia neque iusto, vel, debitis necessitatibus consequatur veritatis
      quisquam. Corporis omnis similique rem nemo beatae, ipsa odio adipisci et
      obcaecati consectetur optio, libero sit fugiat! Mollitia tempora qui
      facere nisi? Natus repudiandae harum, numquam obcaecati ut odit est ipsam
      et asperiores omnis provident repellat dicta nostrum unde assumenda
      reprehenderit? Hic corporis nobis dolores possimus laudantium optio sit,
      et quibusdam sequi consequuntur atque veniam accusamus dolore sed suscipit
      rem earum. At natus repudiandae porro cumque minima eos incidunt quod
      labore, eligendi maxime exercitationem molestias necessitatibus dolor fuga
      voluptatem sint iure adipisci distinctio tempora? Temporibus quae
      praesentium reprehenderit quidem, laborum consequuntur earum natus quam
      quia odio voluptates eligendi tempora ipsa provident, accusantium harum
      fuga suscipit molestiae at ducimus eum molestias. Dicta aspernatur,
      provident fugiat dolore doloremque nesciunt atque eius accusamus autem
      animi nostrum soluta voluptates? Aliquam accusamus minima odit cumque a,
      laborum possimus ipsam mollitia eligendi numquam. Non numquam sequi velit
      nam magni optio pariatur alias. Consectetur, ea dolorem animi maiores
      obcaecati molestiae quos quo asperiores error ratione ad? Temporibus,
      suscipit illo cupiditate laborum odit explicabo placeat est corrupti vel
      in, sit eos distinctio nam itaque totam veniam obcaecati magnam,
      necessitatibus recusandae molestiae doloremque quo iure. Omnis eum, quia
      consectetur laudantium temporibus, impedit optio aperiam, et modi tempora
      rerum obcaecati excepturi repudiandae facilis error adipisci inventore
      alias dignissimos aspernatur explicabo ullam fugiat numquam sapiente enim?
      Cupiditate, eveniet est iure eum, nemo nam nulla rerum vero dolorem
      laboriosam, reprehenderit voluptas. Sequi quibusdam sit distinctio dolore
      earum animi atque quidem eius qui aliquid perspiciatis, maiores vero illo
      voluptas nesciunt et, incidunt modi quos molestias! Tempore quis libero,
      vitae error architecto eligendi soluta beatae mollitia qui quibusdam odit
      totam facilis aspernatur, voluptatibus accusamus. Saepe minus tenetur
      eaque accusamus quasi alias quam? Quam enim, quaerat ipsa voluptatem
      beatae doloremque! Qui et maiores officiis accusantium doloribus tenetur
      beatae non, ipsam deserunt praesentium nisi laborum aperiam magnam, veniam
      perferendis pariatur. Autem cum ratione quaerat excepturi sint modi! Magni
      molestiae pariatur illum officiis voluptatibus voluptate, recusandae
      deserunt eligendi facere voluptatum consectetur odio praesentium inventore
      iste est explicabo veniam omnis nam molestias officia in nobis impedit
      culpa. Quo repellendus cum id provident cumque omnis ab officia quidem
      quis fuga architecto, reprehenderit atque obcaecati voluptatibus officiis
      repellat eaque ea consectetur tempora nam necessitatibus ipsum vero!
      Beatae, officia ullam reiciendis eum pariatur eligendi excepturi ipsam
      aperiam perferendis possimus. Iusto deleniti vitae architecto. Omnis
      quaerat neque dignissimos similique, ab repellendus eius incidunt dolorem
      nam maxime nesciunt, a, doloremque natus quasi aspernatur veniam dicta
      nihil! Nobis unde tempore deserunt, mollitia quisquam, sapiente voluptatum
      qui maxime necessitatibus est iste optio aliquid maiores aspernatur
      molestias incidunt officia. Odit, molestiae. Inventore amet eaque alias
      veniam ut nesciunt eum facere unde neque, ratione animi quas rerum,
      voluptas adipisci laboriosam cumque incidunt libero eveniet non enim
      asperiores nostrum eligendi. Necessitatibus eum, rerum in odio fugit
      suscipit tempore totam sint dolores reiciendis, architecto veniam ab
      repellat consequatur laboriosam blanditiis! Ullam molestiae earum
      distinctio molestias vitae voluptatum aliquid magnam optio at nesciunt
      minima veniam error facere iure eveniet laborum autem voluptatem
      doloribus, voluptas id nobis enim? Enim, magni inventore labore
      perferendis deleniti explicabo maiores iure commodi officiis aperiam
      fugit. Quaerat, optio sed autem cupiditate nam atque excepturi ullam eum
      natus totam beatae. Fuga ducimus minima sunt laudantium, itaque ex nihil
      ea amet, ad neque perferendis sit doloremque. Pariatur veniam porro quae
      dolores consequatur saepe et, sapiente repellendus, tempora iure aperiam
      molestias. Incidunt quis sit magni atque natus mollitia obcaecati ipsa
      inventore dolores a unde doloremque soluta possimus ut expedita, itaque
      earum eos, culpa error, laudantium ea. Incidunt ab veniam molestias eum in
      doloribus dignissimos maxime quia alias, molestiae tenetur neque dicta a
      unde fugit, provident totam? Quidem quos dignissimos consectetur
      reprehenderit ea adipisci ducimus blanditiis suscipit omnis sapiente velit
      nulla pariatur, quaerat quas possimus at minima laudantium voluptate
      consequuntur quod inventore. Ex modi exercitationem facere dignissimos
      delectus unde ullam tempore, quasi expedita placeat. Optio alias
      repellendus quisquam neque cupiditate laboriosam facilis dolorum voluptas
      consectetur consequuntur laudantium a earum dolore molestias ullam impedit
      dolorem, adipisci dolor minus numquam cum magnam quaerat quo doloremque?
      Quidem, error commodi distinctio corrupti iure quae, at ex amet
      voluptatibus provident, a unde magni beatae itaque harum. Consequuntur
      magnam dicta provident quis, amet quam asperiores quod laborum quos,
      incidunt perferendis nisi accusamus, accusantium maxime aliquid doloremque
      cum deserunt alias consectetur blanditiis quia fuga. Doloremque mollitia
      reprehenderit explicabo sint ab nobis distinctio nostrum ullam quaerat
      repellendus, consequuntur aspernatur dolorem suscipit, possimus iure
      similique harum enim rem itaque delectus consequatur quis eos et.
      Cupiditate mollitia quisquam exercitationem accusantium velit voluptas.
      Suscipit voluptate explicabo aut odio rem non vel nisi deserunt, aliquid
      dolorum error architecto corrupti eum qui pariatur! Corrupti officiis,
      voluptas ut sapiente quaerat nulla iure, inventore distinctio mollitia
      quod voluptates quisquam id quo?
    </>
  );
}

export default NavGuidance;
