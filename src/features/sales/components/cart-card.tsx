import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { SelectSeparator } from "@/components/ui/select";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ShoppingBagIcon } from "lucide-react";
import CartMobileBtn from "./cart-mobile-btn";

const CartCard = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Card className="md:h-[700px]">
        <CardHeader>
          <CardTitle className="mb-2 flex items-center gap-x-2">
            <ShoppingBagIcon className="size-4" />
            Carrito
          </CardTitle>
          <SelectSeparator />
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[58vh]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laborum error quidem temporibus quia eos delectus pariatur ex nemo
            tempore quaerat sapiente doloribus ea voluptas impedit explicabo
            necessitatibus ducimus vitae, tempora ipsum. Dignissimos, ea at
            suscipit, vel vero repellendus enim ipsa quibusdam delectus nobis
            reprehenderit accusamus unde fugit voluptatum eaque! Possimus odit
            soluta adipisci ad porro rerum illo eum, harum ea voluptatibus! Quia
            cumque reiciendis quae dolore asperiores saepe deleniti
            reprehenderit ratione, dicta maxime porro tempora quam aperiam illo
            aspernatur? Molestias, harum et perferendis eveniet deleniti
            voluptatem debitis id velit voluptatum voluptas dicta necessitatibus
            dolorum blanditiis, provident nam facilis doloribus? Praesentium
            obcaecati omnis velit eligendi perspiciatis magnam sapiente, rerum
            at labore? Eius voluptatem quae debitis suscipit totam a doloremque
            aut ab officia quas accusamus reprehenderit odio tempora, natus
            soluta, laudantium recusandae dolore, nihil impedit consectetur
            aspernatur dolorum! Ad explicabo alias accusamus voluptate numquam
            deserunt officiis sint ipsa qui, ullam eveniet, corporis pariatur
            enim quo quasi corrupti. Nihil voluptatum unde nobis aperiam ut
            eligendi. Rem eligendi dignissimos quis corrupti nobis fuga nemo
            facilis? Recusandae unde beatae ducimus debitis, natus temporibus
            numquam amet error? Voluptatem neque voluptatum animi praesentium
            tempore atque sed qui deleniti aperiam ab a voluptate nulla aliquam
            explicabo dolorem, doloremque doloribus exercitationem dolores
            dolore culpa voluptatibus. Magni corrupti molestiae, minus deleniti
            iusto, quisquam totam obcaecati beatae quo consectetur, dolorem odit
            nesciunt. Ut perferendis maiores quas delectus placeat eius
            quibusdam reiciendis dolorum similique, natus odit numquam ipsam id
            eveniet nobis itaque doloremque perspiciatis error laborum animi
            vel! Maxime iusto excepturi vel consequatur harum necessitatibus
            ipsa odit natus ipsam officia nulla placeat est consectetur
            cupiditate qui voluptatem cumque accusantium, sunt quod beatae
            tempora magnam doloremque aut! Dolorum non pariatur maxime ullam
            adipisci fugiat vero obcaecati aliquid culpa? Unde eaque consequatur
            maxime corporis veniam error, odio optio iusto tempora repellendus
            architecto reiciendis eligendi nostrum culpa adipisci similique
            impedit dolorum provident libero deserunt nulla. Fugit dolor
            aspernatur autem esse necessitatibus aut corrupti voluptatem,
            deleniti eaque omnis fugiat sint? Natus omnis, quam, ullam eum saepe
            aspernatur deserunt in totam recusandae, commodi nam. Numquam
            doloribus consequatur tempore odio, nobis sed possimus sint expedita
            ducimus ipsum quasi iure? Obcaecati, rerum aliquam. Repudiandae
            voluptatibus veritatis labore odit numquam culpa laboriosam a quam
            beatae fugit alias deleniti, molestias quidem eos, ut esse ipsum
            sint facilis quia! Eveniet dolores fugiat quas harum voluptatibus
            esse. Quas cupiditate amet repellat adipisci odit non illo debitis
            ipsam reprehenderit molestiae temporibus consequuntur quasi, cumque
            magnam, velit tenetur doloribus modi quos minima? Quas odio at magni
            repellendus quidem ab modi dolores quos? Nam quod repudiandae
            praesentium quae minus porro maxime similique laudantium mollitia
            enim illum doloremque corrupti voluptates consectetur eaque
            architecto, quam veniam totam adipisci perferendis possimus ullam
            vero! Beatae ratione eos facere illum reiciendis veritatis non nisi
            excepturi nemo possimus eius, maiores ipsa saepe modi nihil. Dicta
            delectus corporis ipsum autem, repudiandae id pariatur totam nemo?
            Voluptates, minus cumque! Veritatis, dignissimos eaque. Aliquam,
            alias totam. Architecto et qui officia aut id sint sapiente, totam
            aliquid, exercitationem debitis saepe fugiat repudiandae illum
            laboriosam obcaecati?
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <Button>Hola</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="absolute bottom-3">
      <CartMobileBtn />
    </div>
  );
};

export default CartCard;
