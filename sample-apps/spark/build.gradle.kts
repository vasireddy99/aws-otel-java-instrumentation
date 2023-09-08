import com.google.cloud.tools.jib.gradle.BuildImageTask
import com.google.cloud.tools.jib.gradle.JibExtension
import software.amazon.adot.configureImages

plugins {
  java

  application
  id("com.google.cloud.tools.jib")
}

dependencies {
  implementation("commons-logging:commons-logging")
  implementation("com.sparkjava:spark-core")
  implementation("com.squareup.okhttp3:okhttp")
  implementation("io.opentelemetry:opentelemetry-api")
  implementation("org.apache.logging.log4j:log4j-core")
  implementation("software.amazon.awssdk:s3")
  implementation("software.amazon.awssdk:sts")
  implementation("io.opentelemetry.instrumentation:opentelemetry-log4j-appender-2.17")

  runtimeOnly("org.apache.logging.log4j:log4j-slf4j-impl")
}

application {
  mainClass.set("com.amazon.sampleapp.App")
}

jib {
  configureImages(
    "public.ecr.aws/aws-otel-test/aws-opentelemetry-java-base:alpha",
    "public.ecr.aws/u4v1i0d4/spark",
    localDocker = true,
    multiPlatform = false,
    tags = setOf("latest", "${System.getenv("COMMIT_HASH")}"),
  )
}

tasks {
  named("jib") {
    dependsOn(":otelagent:jib")
  }
  named("jibDockerBuild") {
    dependsOn(":otelagent:jibDockerBuild")
  }
  register<BuildImageTask>("jibBuildWithoutAgent") {
    val j = JibExtension(project)
    j.configureImages(
      "eclipse-temurin:17",
//      "public.ecr.aws/aws-otel-test/aws-otel-java-spark-without-auto-instrumentation-agent",
      "public.ecr.aws/u4v1i0d4/spark",
      localDocker = true,
      multiPlatform = false,
      tags = setOf("latest", "${System.getenv("COMMIT_HASH")}"),
    )
    setJibExtension(j)
  }
}
